import { AddProductToCartDTO } from "../../dtos/AddProductToCartDTO";

export interface IAddProductToCartUseCase {
    invoke(addProductDTO: AddProductToCartDTO): Promise<void>;
}