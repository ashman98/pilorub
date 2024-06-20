'use client';
import React, {useState} from 'react';
import styles from "./filter.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faFilter} from "@fortawesome/free-solid-svg-icons";
import {Button, Checkbox, FooterDivider} from "flowbite-react";
import {Label, Select, TextInput} from "flowbite-react";


const Filter = () => {
    const filters = [
        {
            name: "price",
            title: "Цена",
            fields: [{name: "from", title: "От"}, {name: "to", title: "До"}],
            type: "number",
            options: {min: 1500}
        },
        {
            name: "rating",
            title: "Оценка",
            fields: [{name: "from", title: "От"}, {name: "to", title: "До"}],
            type: "number",
            options: {max: 5, min: 0}
        },
        {
            name: "sizes",
            title: "Размеры",
            fields: [{name: "width", title: "Ширина"}, {name: "thickness", title: "Толщина"}, {
                name: "length",
                title: "Длина"
            }],
            type: "number"
        },
        {
            name: "standards",
            title: "Стандарты",
            fields: [
                {name: "gost", title: "ГОСТ"},
                {name: "ost", title: "ОСТ"},
                {name: "tg", title: "ТГ"},
                {name: "kr", title: "КР"}],
            type: "checkbox"
        },
        {name: "wood_types", title: "Сорт", fields: ['Доска', 'Брус'], type: "select"},
        {name: "product_types", title: "Тип пиломатериала", fields: ['Обрезная', ' Строганный'], type: "select"},
    ]
    const [filtered, setFiltered] = useState([{}]);

    const [openFilter, setOpenFilter] = useState(false);
    const handleOpenFilter = (open) => {
        setOpenFilter(open);
    }
    const handleChangeFilter = () => {

    }

    return (
        <>

            {openFilter ?
                <div className={styles.backdrop}></div>

            : <Button color="gray" onClick={() => handleOpenFilter(!openFilter)} className={styles.filterOpenBtn}>
                <FontAwesomeIcon icon={faFilter}/>
                Фильтры
            </Button>}
            <aside className={`${styles.filter_box} ${openFilter ? styles.active : ''}`}>
                <div className={styles.aside_header}>
                    <div className={styles.filter_title_box}>
                        <FontAwesomeIcon icon={faFilter}/>
                        <h2 className={styles.filter_title}>Фильтры</h2>
                    </div>
                    {openFilter ?
                        <Button onClick={() => setOpenFilter(false)} className={`flex items-center ${styles.close_btn}`}>
                            Закрыть
                        </Button> : ''}
                </div>
                <FooterDivider className={styles.header_divider}/>
                <div className={styles.aside_body}>
                    {filters.map((filterField, index) => {
                        switch (filterField.type) {
                            case "number":
                                return <div key={index} className={`${styles.number_field} flex flex-col gap-4 p-3 my-2`}>
                                    <Label value={filterField.title}/>
                                    <div className="flex gap-2">
                                        {filterField.fields.map((field, index) => (
                                            <div key={index + 1} className={`basis-1/${filterField.fields.length}`}>
                                                <Label htmlFor={`product_${field.name}_filter`} value={field.title}/>
                                                <div className="flex  justify-between items-center">
                                                    <TextInput id={`product_${field.name}_filter`} type="number"/>
                                                </div>
                                            </div>

                                        ))}
                                    </div>

                                </div>
                            case "select":
                                return <div key={index} className="p-3">
                                    <Label value={filterField.title} htmlFor={`product_${filterField.name}_filter`}/>
                                    <Select id={`product_${filterField.name}_filter`}>
                                        {
                                            filterField.fields.map((field, index) => (
                                                <option key={index} value={field}>{field}</option>
                                            ))
                                        }
                                    </Select>
                                </div>
                            case "checkbox":
                                return <div key={index} className="p-3">
                                    <Label htmlFor="checkbox" value={filterField.title}/>
                                    <div className="flex max-w-md flex-wrap gap-4 my-4" id="checkbox">
                                        {filterField.fields.map((field, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <Checkbox value={field.name} id={`product_${field.name}_field}`}/>
                                                <Label htmlFor={`product_${field.name}_field}`}>{field.title}</Label>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                        }
                    })}
                </div>
                <FooterDivider/>
                <div className={styles.aside_footer}>
                    <Button onClick={() => setOpenFilter(false)} color="blue">Применить</Button>
                </div>
            </aside>
        </>

    );
};

export default Filter;