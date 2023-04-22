import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userSignUp } from './../../../Redux/Actions/Actionslogin';
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const validate = (input) => {
  let error = {};

  if (!input.user_name) {
    error.name = 'The user_name is required.';
  }

  if (!/^[a-zA-Z ]+$/.test(input.first_name)) {
    error.name = 'The title requires letters';
  }

  if (!/^[a-zA-Z ]+$/.test(input.last_name)) {
    error.name = 'The title requires letters';
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(input.email)) {
    error.name = 'The email is invalid.';
  }


  return error;
};

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [input, setInput] = useState({
    user_name: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    phone: [],
    age: '',
    gender: '',
    rol: [2],
  });

  const [error, setError] = useState({
    user_name: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    phone: '',
    age: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;

    if (property === 'phone') {
      const phoneArr = value.split(',').map((num) => parseInt(num.trim(), 10));
      setError(validate({ ...input, [property]: phoneArr }));
      setInput({ ...input, [property]: phoneArr });
    } else {
      setError(validate({ ...input, [property]: value }));
      setInput({ ...input, [property]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      input.user_name &&
      input.email &&
      input.password &&
      input.first_name &&
      input.last_name &&
      input.age
    ) {
      dispatch(userSignUp(input));
      setInput({
        user_name: '',
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        phone: [],
        age: '',
        gender: '',
        rol: [2],
      });
      history.push('/admin/default');
    } else {
      alert('!!Required Data');
    }
  };

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
    <div>
      <div>
        <h1>New Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label for="user_name">UserName: </label>
            <input
              type="text"
              value={input.user_name}
              name="user_name"
              placeholder="write your UserName...."
              onChange={(e) => handleChange(e)}
            />
            {error.user_name && <span>{error.user_name}</span>}
            <br />
          </div>
          <div>
            <label for="email">Email: </label>
            <input
              type="email"
              value={input.email}
              name="email"
              placeholder="mail@simmmple.com"
              onChange={(e) => handleChange(e)}
            />
            {error.email && <span>{error.email}</span>}
            <br />
          </div>
          <div>
            <label for="first_name">FirstName: </label>
            <input
              type="text"
              value={input.first_name}
              name="first_name"
              placeholder="write your FirstName...."
              onChange={(e) => handleChange(e)}
            />
            {error.first_name && <span>{error.first_name}</span>}
            <br />
          </div>
          <div>
            <label for="last_name">LastName: </label>
            <input
              type="text"
              value={input.last_name}
              name="last_name"
              placeholder="write your LastName...."
              onChange={(e) => handleChange(e)}
            />
            {error.last_name && <span>{error.last_name}</span>}
            <br />
          </div>
          <div>
            <label for="phone">Phone: </label>
            <input
              type="text"
              value={input.phone}
              name="phone"
              placeholder="Ej: 3102332211, 3152221133, 321....."
              onChange={(e) => handleChange(e)}
            />
            {error.phone && <span>{error.phone}</span>}
            <br />
          </div>
          <div>
            <label for="age">Age: </label>
            <input
              type="number"
              value={input.age}
              name="age"
              placeholder="Ej:  32  "
              onChange={(e) => handleChange(e)}
            />
            {error.age && <span>{error.age}</span>}
            <br />
          </div>
          <div>
            <label for="gender">Gender:</label>
            <input
              type="radio"
              name="gender"
              value="Masculino"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="Masculino">Masculino</label>
            <input
              type="radio"
              name="gender"
              value="Femenino"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="Femenino">Femenino</label>
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
    </Box>
  );
};

export default SignUp;