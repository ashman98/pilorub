'use client';
import React, {ChangeEvent, FormEvent, useState} from 'react';
import { useMutation } from "@apollo/client";

const RegisterFormComponent = () => {
    const [createUser] = useMutation(CREATE_USER);

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const {data} = await createUser({
            variables: {
                name: formValues.firstName,
                surname: formValues.lastName,
                phone: formValues.number,
                email: formValues.email,
                password: formValues.password,
                confirmPassword: formValues.confirmPassword
            }
        })
        console.log('Form submitted:', formValues);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-y-5 gap-x-8">
                <div>
                    <label className="text-sm mb-2 block" htmlFor="firstName">Имя</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="bg-gray-100 w-full text-sm px-2.5 py-2 rounded-md outline-amber-500"
                        placeholder="Введите имя"
                        value={formValues.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="text-sm mb-2 block" htmlFor="lastName">Фамилия</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="bg-gray-100 w-full text-sm  px-2.5 py-2  rounded-md outline-amber-500"
                        placeholder="Введите фамилию"
                        value={formValues.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="text-sm mb-2 block" htmlFor="email">Электронная почта</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="bg-gray-100 w-full text-sm  px-2.5 py-2  rounded-md outline-amber-500"
                        placeholder="Введите эл. почту"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="text-sm mb-2 block" htmlFor="number">Номер телефона</label>
                    <input
                        id="number"
                        name="number"
                        type="tel"
                        className="bg-gray-100 w-full text-sm  px-2.5 py-2  rounded-md outline-amber-500"
                        placeholder="Введите номер мобильного телефона"
                        value={formValues.number}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="text-sm mb-2 block" htmlFor="password">Пароль</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="bg-gray-100 w-full text-sm px-2.5 py-2  rounded-md outline-amber-500"
                        placeholder="Введите пароль"
                        value={formValues.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="text-sm mb-2 block" htmlFor="confirmPassword">Подтвердите пароль</label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        className="bg-gray-100 w-full text-sm  px-2.5 py-2  rounded-md outline-amber-500"
                        placeholder="Подтвердите пароль"
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="mt-10">
                <button
                    onClick={(e: FormEvent) => handleSubmit(e)}
                    type="submit"
                    className="min-w-[150px] py-3 px-4 text-sm font-semibold rounded text-white bg-amber-700 hover:bg-amber-800 focus:outline-none"
                >
                    Зарегистрируйтесь
                </button>
                <p className="text-sm font-light my-2 text-gray-500 dark:text-gray-400">
                    У вас уже есть учетный запись?
                    <a href='/login'
                       className="font-medium text-primary-600 mx-2 hover:underline dark:text-primary-500">
                        Войдите
                    </a>
                </p>
            </div>
        </form>
    );
};

export default RegisterFormComponent;