import React, { useState } from "react";

function LoginForm() {
  const iniciaLcredencial = {
    user: "",
    password: "",
  };

  const [credencial, setCredencial] = useState(iniciaLcredencial);
  return <div>LoginForm</div>;
}

export default LoginForm;
