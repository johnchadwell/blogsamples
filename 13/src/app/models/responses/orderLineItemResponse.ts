import { OrderLineItemStatus } from "../orderLineItemStatus";

export interface OrderLineItemResponse {

    orderLineItemId: number;
    orderLineItemGuid: string;
    orderId: number;
    orderLineItemStatus: OrderLineItemStatus,
    productId: number;
    productName: string;
    quantity: number;
    priceTotal: number,
    createdBy: string;
    createdOn: string;
    modifiedBy: string;
    modifiedOn: string;

}
