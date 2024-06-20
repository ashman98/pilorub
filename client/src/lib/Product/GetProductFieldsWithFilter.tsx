import RatingUI from "@/app/store/_components/Rating/RatingUI";

interface Product {
    id: string;
    category: string;
    product_type: string;
    thickness: string;
    width: string;
    length: string;
    standard: string;
    ratings: number[];
    price: string;
    img: string;
}

type ExcludedKeys = 'id' | 'img'  | 'price';

export default function getFilteredFields(product: Product): Record<string, any> {
    const excludedKeys: ExcludedKeys[] = ['id', 'img', 'price'];
    const result: Record<string, any> = {};

    for (const key in product) {
        if (!excludedKeys.includes(key as ExcludedKeys) && typeof product[key as keyof Product] !== 'number') {
            switch (key) {
                case 'category':
                    result['Категория'] = product[key as keyof Product];
                    break;
                case 'product_type':
                    result['Тип продукта'] = product[key as keyof Product];
                    break;
                case 'thickness':
                    result['Толщина'] = product[key as keyof Product];
                    break;
                case 'width':
                    result['Ширина'] = product[key as keyof Product];
                    break;
                case 'length':
                    result['Длина'] = product[key as keyof Product];
                    break;
                case 'standard':
                    result['Стандарт'] = product[key as keyof Product];
                    break;
                case 'ratings':
                    result['Рейтинг'] = <RatingUI ratings={product[key]} width={"25"} height={"25"} />;
                    break;
                default:
                    result[key] = product[key as keyof Product];
            }
        }
    }

    return result;
}
