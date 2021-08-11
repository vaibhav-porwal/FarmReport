import React,{useState}from 'react'
// import './default.css'
import './style.css'
// import './style2.css'

const Reportloss = () => {
const [user, setUser] = useState({
    type:"",year:"",Address:"",Area:"",District:"",State:"",PIN:"",Expected_Compensation:"",Received_Compensation:""
})
let name,value;
const handleinput =(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
   }
   const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(user);
   }
    return (
        <>
            <body className="head">
                <section>
                    <div>
                        <h1 className="head1">REPORT CROP LOSS</h1>
                        <p className="para1">Claim for Insurance!</p>
                    </div>
                </section>

                <form method="POST" className="formtype">
                    <div >
                        <div>
                            <select  style={{ width: 370 , margin:20}}  name="type"  value={user.type}  onChange={handleinput}  className="dropbox1">
                                <option value="">Select crop type </option>
                                <option value="Work 1 "> Rabi </option>
                                <option value="Work 2"> Wheat </option>
                            </select>
                        </div>

                        <div >
                            <select  style={{ width: 370 , margin:10,}}  name="year"  value={user.year}  onChange={handleinput} className="dropbox1">
                                <option value="">Select year </option>
                                <option value="Work 1"> 2020 </option>
                                <option value="Work 2"> 2019 </option>
                                <option value="Work 3"> 2018 </option>
                            </select>
                        </div>

              

                        <div >
                            <input  style={{ width: 370 , margin:10,padding:10}}   name="Address"  value={user.Address}  onChange={handleinput}  onChange={handleinput}  placeholder="Address"/>
                            <div></div>
                        </div>

                        <div >
                            <input  style={{ width: 370 , margin:10,padding:10}}   name="Area"  value={user.Address}  onChange={handleinput}  onChange={handleinput}  placeholder="Land Area"/>
                            <div></div>
                        </div>


                        {/* <div className="div1">
                            <select className="dropbox2">
                                <option >Select State </option>
                                <option > Andaman & Nicobar </option>
                                <option > Andhra Pradesh </option>
                                <option > Assam </option>
                                <option > Bihar </option>
                                <option > Chandigarh </option>
                                <option > Chattisgarh </option>
                                <option > Dadar & Nagar Haveli </option>
                                <option > Daman & Diu </option>
                                <option > Delhi </option>
                                <option > Goa </option>
                                <option > Gujarat </option>
                                <option > Haraya </option>
                                <option > Himachal Pradesh </option>
                                <option > Jammu & Kashmir </option>
                                <option > Jharkhand </option>
                                <option > Karnataka </option>
                                <option > Kerala </option>
                                <option > Lakshadweep </option>
                                <option > Madhya Pradesh </option>
                                <option > Maharastra </option>
                                <option > Manipur </option>
                                <option > Meghalaya </option>
                                <option > Mizoram </option>
                                <option > Nagaland </option>
                                <option > Orissa </option>
                                <option > Pondicherry </option>
                                <option > Punjab </option>
                                <option > Rajasthan </option>
                                <option > Sikkim </option>
                                <option > Tamilnadu </option>
                                <option > Telengana </option>
                                <option > Tripura </option>
                                <option > Uttar Pradesh </option>
                                <option > Uttarakhand </option>
                                <option > West Bengal </option>
                            </select>
                        </div> */}
                          <div >
                            <input  style={{ width: 370 , margin:10,padding:10}}  name="District"  value={user.District}  onChange={handleinput}  placeholder="District"/>
                            <div></div>
                        </div>
                        <div >
                            <input  style={{ width: 370 , margin:10,padding:10}}  name="State"  value={user.State}  onChange={handleinput}   placeholder="State"/>
                            <div></div>
                        </div>

                      


                        <div >
                            <input  style={{ width: 370 , margin:10,padding:10}}  name="PIN"  value={user.PIN}  onChange={handleinput}  placeholder="PIN" />
                            <div ></div>
                        </div>

                        <div>
                            <input  style={{ width: 370 , margin:10,padding:10}}  name="Expected_Compensation"  value={user.Expected_Compensation}  onChange={handleinput}  placeholder="Expected Compensation"/>
                            <div></div>
                        </div>

                        <div>
                            <input style={{ width: 370 , margin:10,padding:10}}   name="Received_Compensation"  value={user.Received_Compensation}  onChange={handleinput} placeholder="Received Compensation"/>
                            <div></div>
                        </div>

                        <div >
                            <div >
                                <button className="btn1"onClick={handleSubmit} type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>


            </body>
        </>
    )
}


export default Reportloss