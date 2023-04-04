import { useSelector, useDispatch } from "react-redux";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Invoice from "./Invoice"; 
import InvoiceModal from "./InvoiceModal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteInvoice } from "../redux/invoiceSlice/action";

export default function All_Invoices() {
    const invoices = useSelector(state => state.invoices)
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const [ref,setRef] = useState(1)
    useEffect(()=>{
    },[ref])

    const [state,setState] = useState ({
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
        invoiceNumber: '',
        closeModal: false,
        items : [
        {
          id: 0,
          name: '',
          description: '',
          price: '1.00',
          quantity: 1
        }
      ]}
    ) 
    const [isOpen, setIsOpen] = useState(false)

    function openInvoice (props) { setState(props); setIsOpen(true); }

    function editInvoice (props){ navigate(`/edit-invoice/${props.invoiceNumber}`) }

    function removeInvoice (props){ dispatch(deleteInvoice(props)); setRef(ref=> ref+1); }

    const closeModal= () => setIsOpen(false)
    const InvoicesDetails = () =>{
        return invoices.filter(inv=> inv.billFrom!=='').map((inv)=> <Invoice val={inv} view={()=>{openInvoice(inv)}} edit= {()=>{editInvoice(inv)}} remove={()=>{removeInvoice(inv)}}/>)
    }  

    return (
        <div className="homePage">
            <Row>
                <Col><h1 className="invoiceGenerator">Invoice Generator</h1></Col> 
                <Col><Link to='/create-invoice'><Button variant="primary">Create Invoice</Button></Link></Col>
            </Row> 
            <Row > 
                { invoices.length === 1 ? <h4 >No Invoices Available</h4> : <InvoicesDetails/>}   
            </Row>
            <InvoiceModal showModal={isOpen} closeModal={closeModal} info={state} items={state.items} currency={state.currency} subTotal={state.subTotal} taxAmmount={state.taxAmmount} discountAmmount={state.discountAmmount} total={state.total}/>
        </div>
    )
}