import FormCheckout from "./FormCheckout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../Context/CartContext";
import { useContext, useState } from "react";
import { db } from "../../FirebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

const FormCheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const checkoutFn = (data) => {
    let total = getTotalPrice();

    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, dataOrder).then((res) => setOrderId(res.id));

    cart.map((product) =>
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    );

    clearCart();
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: checkoutFn,
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "El nombre debe tener al menos tres caracteres")
        .max(10, "El nombre no puede superar los 10 caracteres"),
      email: Yup.string()
        .email("El campo debe ser un email")
        .required("Este campo es obligatorio"),
      phone: Yup.number().required("Este campo es obligatorio"),
      password: Yup.string()
        .required("Este campo es obligatorio")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*.])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            "Debe tener minimo 6 caracteres y maximo 15,  al menos 1 minuscula, una mayuscula, un caracter especial y un numero",
        }),

      confirmPassword: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),

    validateOnChange: false,
  });

  return (
    <div>
      {orderId ? (
        <h1>{orderId}</h1>
      ) : (
        <FormCheckout
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default FormCheckoutContainer;
