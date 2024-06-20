import React from 'react';
import {Metadata, NextPage} from "next";
import logo from "@/assets/images/pilorub_logo2.png";
import Image from "next/image";
import RegisterFormComponent from "@/app/register/_components/RegisterForm/RegisterFormComponent";

export const metadata: Metadata = {
    title: 'Регистрация'
}



const RegisterPage: NextPage = () => {
    return (
        <div className="max-w-xl rounded-md bg-white mx-auto font-[sans-serif] text-[#333] p-6">
            <div className="text-center mb-8">
                <h4 className="text-2xl font-semibold mt-3">Создайте учетную запись</h4>
            </div>
            <RegisterFormComponent />
        </div>
    );
};

export default RegisterPage;