import React, { useEffect, useState, useRef } from 'react';
import { HiExclamation } from 'react-icons/hi';
import { Toast } from 'flowbite-react';

interface ToastUiProps {
    timeout: number;
    type?: string; // Adjust type as needed
    text?: string;
    open: boolean;
    revert: (id: number) => void;
    id: number;
}

const ToastUiComponent: React.FC<ToastUiProps> = ({ open, id, revert, timeout, type, text }) => {
    const [seconds, setSeconds] = useState<number>(timeout);
    const timer = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setSeconds(timeout);
    }, [timeout]);

    useEffect(() => {
        if (open) {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            timer.current = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds > 0) {
                        return prevSeconds - 1;
                    } else {
                        if (timer.current) {
                            clearInterval(timer.current);
                        }
                        return 0;
                    }
                });
            }, 1000);
        } else {
            if (timer.current) {
                clearInterval(timer.current);
            }
        }
        return () => {
            if (timer.current) {
                clearInterval(timer.current);
            }
        };
    }, [open, id, revert]);

    return open ? (
        <Toast className="fixed bottom-3 left-3 z-20 bg-amber-700">
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-transparent text-white dark:bg-orange-700 dark:text-orange-200">
                <HiExclamation className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal text-white">
                {text ? `${text} Товар будет удален из корзины через ${seconds}с` : `Товар будет удален из корзины через ${seconds}с`}
            </div>
            <Toast.Toggle  onClick={() => {
                clearInterval(timer.current);
                revert(id)
            }}/>
        </Toast>
    ) : null;
};

export default ToastUiComponent;
