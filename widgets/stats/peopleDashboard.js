// Widget : Stat Style 
// Style : Stat widget with right top icon

// import node module libraries
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';



//bg-light-primary

const PeopleDashboard = props => {


    const { info } = props;
    return (
        <div style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
               <Card style={{
  marginTop:20, width: 160, borderRadius: 100, height: 160, boxShadow: '0 4px 8px rgba(0, 0, 0, 1)',// Adjust the values as needed
        }}>



            <Card.Body style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
                <div className="icon" style={{ backgroundColor: `${info.color}`, width: 40, height: 40, borderRadius: 60, alignItems: 'center', display: 'flex', justifyContent: 'center' }}>

                    <div>
                        {info.icon}
                    </div>

                </div>

                <div className="d-flex justify-content-between align-items-center mb-3" >
                    <div>
                        <h5 className="mb-0">{info.title}</h5>
                    </div>


                </div>
                <div>
                    <h3 className="fw-bold ">{info.value}</h3>
                    <p className="mb-0" dangerouslySetInnerHTML={{ __html: info.statInfo }}></p>
                </div>
            </Card.Body>
        </Card>
        </div>
     
    )
}

// Typechecking With PropTypes
PeopleDashboard.propTypes = {
    info: PropTypes.any.isRequired
};

export default PeopleDashboard