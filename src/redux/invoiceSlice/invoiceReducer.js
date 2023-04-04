import { combineReducers } from "redux"

const initialState= {
    invoices:[{
        isOpen: false,
        currency: '$',
        currentDate: '',
        dateOfIssue: '',
        billTo: '',
        billToEmail: '',
        billToAddress: '',
        billFrom: '',
        billFromEmail: '',
        billFromAddress: '',
        notes: '',
        total: '0.00',
        subTotal: '0.00',
        taxRate: '',
        taxAmmount: '0.00',
        discountRate: '',
        discountAmmount: '0.00',
        invoiceNumber: 0,
        items : [
        {
          id: 0,
          name: '',
          description: '',
          price: '1.00',
          quantity: 1
        }
      ]}]
}

export const invoiceReducer= (state= initialState, {type, payload}) => {
    switch(type){
        case 'ADD_INVOICE': state.invoices.push(payload); return state;
        case 'EDIT_INVOICE': state.invoices= state.invoices.map(inv=> inv.invoiceNumber===payload.invoiceNumber ? payload : inv); return state;
        case 'DELETE_INVOICE': state.invoices= state.invoices.filter(inv=> inv!== payload);  return state;
        default: return state;
        // case: 'ADD_INVOICE': 
    }
}