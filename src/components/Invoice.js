export default function Invoice({ val, view, edit, remove }) {
    return (
        <div className="invoice" >
            <div>Invoice No: {val.invoiceNumber} <span className="right">Date: {val.dateOfIssue} <img className="image" onClick={view} src="https://www.svgrepo.com/show/458981/view.svg" /></span> </div>
            <div>From : {val.billFrom} <span className="right">To:  {val.billTo} <img className="image" onClick={edit} src="https://www.svgrepo.com/show/513824/edit.svg" /> </span> </div>
            <div >{val.billFromEmail}<span className="right">{val.billToEmail} <img className="image" onClick={remove} src="https://www.svgrepo.com/show/511788/delete-1487.svg" /></span> </div>
        </div>
    )
} 