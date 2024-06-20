import React from 'react';
import styles from "./feedback.module.css";
import {Alert, FooterDivider, Card} from "flowbite-react";
import RatingUI from "@/app/store/_components/Rating/RatingUI";


const FeedbackComponent = () => {


    const reviews = [
        {
            id: 1,
            user: {name: 'Vahram', surname: "Hovhannisyan"},
            created_at: new Date(),
            description: 'This is beautifully wood',
            rate: 5
        },
        {
            id: 2,
            user: {name: 'Ashot', surname: "Manukyan"},
            created_at: new Date(),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet.',
            rate: 5
        },
        {
            id: 3,
            user: {name: 'Arsho', surname: "Stepanyan"},
            created_at: new Date(),
            description: 'Noo i write 2 stars, but wood is not great',
            rate: 2
        }
    ]

    let dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return (
        <div className={styles.feedback_box}>
            <h3 className={`font-bold text-gray-700 dark:text-gray-300 ${styles.feedback_box_title}`}>Отзывы
            </h3>
            <FooterDivider style={{margin: "10px 0"}}/>
            <div className={styles.feedback_content}>
                {reviews && reviews.length > 0
                    ?
                    <>
                        {reviews.map((feedback) => (
                            <Card href="#" className="max-w-full">
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {feedback.description}
                                </p>
                                <div className={styles.feedback_info}>
                                    <p className={`text-sm font-bold text-gray-600 ${styles.user_info}`}>
                                        <span className={styles.personal_info}>
                                            {feedback.user.name} {feedback.user.surname}
                                        </span>
                                        <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400"/>
                                        <span className={styles.rate_info}>
                                            <RatingUI ratings={[feedback.rate]} width={"18"} height={"18"}/>
                                        </span>
                                    </p>
                                    <p className="text-sm font-normal text-gray-500 ">
                                        Добавлено в {feedback.created_at.toLocaleDateString('ru', dateOptions)}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </>
                    :
                    <Alert color="warning" withBorderAccent>
                      <span>
                        <span className="font-medium">Упсс!</span> Отзывы не найдены
                      </span>
                    </Alert>
                }
            </div>
        </div>
    );
};

export default FeedbackComponent;