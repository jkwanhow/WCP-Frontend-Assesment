import "./card.css";

function Card(props) {
    return(
        <div className="cardBox">
            <div className="cardInner">
                <div className="cardFront">
                    {props.data && <img src={props.data.avatar} />}
                    {props.data &&  //Make sure JSON has been fetched before rendering info
                    <div className="frontTextContainer">
                        <div className="title name">{props.data.first_name} {props.data.last_name}</div>
                        <div className="text"><b>ID:</b> {props.data.id}</div>
                        <div className="text"><b>Title:</b> {props.data.employment.title}</div>
                        <div className="text"><b>Email:</b> {props.data.email}</div>
                        <div className="text"><b>Phone Number:</b> {props.data.phone_number}</div>
                        <div className="text"><b>Status:</b> {props.data.subscription.status}</div>
                        <div className="text"><b>Plan:</b> {props.data.subscription.plan}</div>
                        <div className="text"><b>Key Skill:</b> {props.data.employment.key_skill}</div>
                        <div className="text"><b>Gender:</b> {props.data.gender}</div>
                        <div className="text"><b>Date of Birth:</b> {props.data.date_of_birth}</div>

                    </div>
                    }
                </div>
                <div className ="cardBack">
                    {props.data &&
                    <div>
                        <div className="backTextContainer">
                            <div className="title back">Extra Information</div>
                            <div className="line"/>
                            <div className="text"><b>Username:</b> {props.data.username}</div>
                            <div className="text"><b>Password:</b> {props.data.password}</div>
                            <div className="text"><b>Unique ID:</b> <span className="smaller">{props.data.uid}</span></div>
                            <div className="text"><b>Social Insurance Number:</b> {props.data.social_insurance_number}</div>
                        </div>
                        <div className="backTextContainer">
                            <div className="title back">Payment Information</div>
                            <div className="line"/>
                            <div className="text"><b>Payment Method:</b> {props.data.subscription.payment_method}</div>
                            <div className="text"><b>Payment Term:</b> {props.data.subscription.term}</div>
                            <div className="text"><b>Credit Card:</b> {props.data.credit_card.cc_number}</div>
                        </div>
                        <div className="backTextContainer">
                            <div className="title back">Location Information</div>
                            <div className="line"/>
                            <div className="text"><b>Address:</b> <span className='smaller'>{props.data.address.street_address}, {props.data.address.street_name}
                            , {props.data.address.city}, {props.data.address.zip_code} {props.data.address.state}, {props.data.address.country}</span></div>
                            <div className="text"><b>Coordinates:</b> {props.data.address.coordinates.lat.toString().slice(0,8)}, {props.data.address.coordinates.lng.toString().slice(0,8)}</div>
                        </div>
                    </div>
                    }
                </div>
            </div>
            
        </div>
    );
}

export default Card;