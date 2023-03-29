import LoginForm from "../componets/LoginForm";
import { json, redirect, useSubmit } from 'react-router-dom';
import { useState } from "react";
import ErrorMessageUi from "../componets/UI/ErrorMessage";

function Login() {
   const [errorMessage,setErrorMessage] = useState(null);
    
    return (
        <>
          {errorMessage && <ErrorMessageUi message={errorMessage}/> }
            <LoginForm />
        </>
    )
}
export default Login;

export async function action({ request }) {
  
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'login';
  
    if (mode !== 'login' && mode !== 'signup') {
      throw json({ message: 'Unsupported mode.' }, { status: 422 });
    }
  
    const data = await request.formData();
    const authData = {
      email: data.get('email'),
      password: data.get('password'),
    };
    console.log(authData);
  
    const response = await fetch('http://localhost:8080/' + mode, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authData),
    });
  
    if (response.status === 422 || response.status === 401) {
      return response;
    }
  
    if (!response.ok) {
      // return redirect('/login?message="error');
      throw json({ message: 'Could not authenticate user.' }, { status: 500 });
    }
  
    const resData = await response.json();
    const token = resData.token;
  
    localStorage.setItem('token', token);
  
    // soon: manage that token
    return redirect('/');
  }