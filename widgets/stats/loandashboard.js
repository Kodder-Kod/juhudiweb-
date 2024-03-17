// Widget : Stat Style 
// Style : Stat widget with right top icon

// import node module libraries
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';


//bg-light-primary

const LoanDashboard = props => {
    const { info } = props;
    return (
        <Card style={{width: 190,borderRadius:100,height: 190 , boxShadow: '0 4px 8px rgba(0, 0, 0, 1)', // Adjust the values as needed
        }}>
            
            <Card.Body style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:'column'}}>
                <div className="d-flex justify-content-between align-items-center mb-3" >
                    <div>
                        <h5 className="mb-0">{info.title}</h5>
                    </div>
                    <div className="icon-shape icon-mdtext-primary rounded-2" style={{backgroundColor:`${info.color}`,width:40 ,height:40, }}>
                        {info.icon}
                    </div>
                </div>
                <div>
                    <h3 className="fw-bold ">{info.value}</h3>
                    <p className="mb-0" dangerouslySetInnerHTML={{ __html: info.statInfo}}></p>
                </div>
            </Card.Body>
        </Card>
    )
}

// Typechecking With PropTypes
LoanDashboard.propTypes = {
    info: PropTypes.any.isRequired
};

export default  LoanDashboard