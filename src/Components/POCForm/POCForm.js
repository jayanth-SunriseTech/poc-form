import React, { useState } from "react";
import * as Yup from "yup";

import "./POCForm.css";

function POCForm() {
 
  const [tokenName,setTokenName] = useState(null);
  const [tokenSymbol,setTokenSymbo] = useState(null);
  const [initialSupply,setInitialSupply] = useState(null);
  const [totallSupply,setTotalSupply] = useState(null);
  const [network,setNetwork] = useState(null);
 

  //   const navigate = useNavigate();
  //   const [loading, setLoading] = useState(false);
  //   const [success, setSuccess] = useState(false);
  //   const [failure, setFailure] = useState(false);

  //   const postData = async (data) => {
  //     setLoading(true);
  //     try {
  //       let Data = await axios.post(`${env.api}/signup`, data);
  //       window.alert("User registered successfully");
  //       setLoading(false);
  //       setFailure(false);
  //       setSuccess(true);
  //       navigate("/signin");
  //     } catch (error) {
  //       setLoading(false);
  //       setFailure(true);
  //       if (error.message === "Request failed with status code 400") {
  //         window.alert(
  //           "E-mail is already registered.Please use different e-mail ID."
  //         );
  //         console.log(error);
  //       } else {
  //         window.alert("Check your connection");
  //         console.log(error);
  //       }
  //     }
  //   };
  return (
    <>
      <div className="signup__page">
        <form>
          <div className="signup__container">
            <div className="signup__title">
              <div className=" container-fluid signup__inner">
                <div className="row">
                  <div class="jumbotron mb-0 blue-gradient jumbotron-fluid text-white">
                    <div class="container">
                      <h1 class="display-3">Create your ERC20 Token</h1>
                      <p class="lead">
                        Easily deploy Smart Contract for a Standard, Capped,
                        Mintable, Burnable, Payable ERC20 Token.
                        <br />
                        No login. No setup. No coding required.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-lg-4">
                    <div class="card mt-3">
                      <h5 class="card-header bg-dark text-white">
                        Token Details
                      </h5>
                      <div class="card-body">
                        <form>
                          <span>
                            <div class="form-group">
                              <label for="exampleInputEmail1">Token Name</label>
                              <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Your token name"
                                onChange={(e)=>setTokenName(e.target.value)}
                              />
                              <small
                                id="emailHelp"
                                class="form-text text-muted"
                              >
                                Choose a name for your token.
                              </small>
                            </div>
                          </span>
                          <span>
                            <div class="form-group">
                              <label for="exampleInputEmail1">
                                Token Symbol
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Your token symbol"
                                onChange={(e)=>setTokenSymbo(e.target.value)}
                              />
                              <small
                                id="emailHelp"
                                class="form-text text-muted"
                              >
                                Choose a symbol for your token (usually 3-5
                                chars).
                              </small>
                            </div>
                          </span>
                          <span>
                            <div class="form-group">
                              <label for="exampleInputEmail1">
                                Token Decimals
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                              />
                              <small
                                id="emailHelp"
                                class="form-text text-muted"
                              >
                                Insert the decimal precision of your token. If
                                you don't know what to insert, use 18.
                              </small>
                            </div>
                          </span>
                          <span>
                            <div class="form-group">
                              <label for="exampleInputEmail1">
                                Initial Supply
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={(e)=>setInitialSupply(e.target.value)}
                              />
                              <small
                                id="emailHelp"
                                class="form-text text-muted"
                              >
                                Insert the initial number of tokens available.
                                Will be put in your account.
                              </small>
                            </div>
                          </span>
                          <span>
                            <div class="form-group">
                              <label for="exampleInputEmail1">
                                Total supply
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={(e)=>setTotalSupply(e.target.value)}
                              />
                              <small
                                id="emailHelp"
                                class="form-text text-muted"
                              >
                                Insert the maximum number of tokens available.
                              </small>
                            </div>
                          </span>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div class="card mt-3">
                      <h5 class="card-header bg-dark text-white">
                        Token Details
                      </h5>
                      <div class="card-body">
                        <span>
                          <div class="form-group">
                            <label for="exampleFormControlSelect1">
                              Supply Type
                            </label>
                            <select
                              class="form-control"
                              id="exampleFormControlSelect1"
                            >
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                            <small
                              id="exampleFormControlSelect1"
                              class="form-text text-muted"
                            >
                              10k, Fixed, Unlimited, Capped
                            </small>
                          </div>
                        </span>
                        <span>
                          <div class="form-group">
                            <label for="exampleFormControlSelect1">
                              Access Type
                            </label>
                            <select
                              class="form-control"
                              id="exampleFormControlSelect1"
                            >
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                            <small
                              id="exampleFormControlSelect1"
                              class="form-text text-muted"
                            >
                              10k, Fixed, Unlimited, Capped
                            </small>
                          </div>
                        </span>
                        <span>
                          <div class="form-group">
                            <label for="exampleFormControlSelect1">
                              Transfer Type
                            </label>
                            <select
                              class="form-control"
                              id="exampleFormControlSelect1"
                            >
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                            <small
                              id="exampleFormControlSelect1"
                              class="form-text text-muted"
                            >
                              10k, Fixed, Unlimited, Capped
                            </small>
                          </div>
                        </span>
                        <span>
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexSwitchCheckDefault"
                            >
                              Verified Source Code
                            </label>
                            <br />
                            <small
                              id="exampleFormControlSelect1"
                              class="form-text text-muted"
                            >
                              10k, Fixed, Unlimited, Capped
                            </small>
                          </div>
                        </span>
                        <span>
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexSwitchCheckDefault"
                            >
                              Remove Copyright
                            </label>
                            <br />
                            <small
                              id="exampleFormControlSelect1"
                              class="form-text text-muted"
                            >
                              10k, Fixed, Unlimited, Capped
                            </small>
                          </div>
                        </span>
                        <span>
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexSwitchCheckDefault"
                            >
                              Default switch checkbox input
                            </label>
                          </div>
                        </span>
                        <span>
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexSwitchCheckDefault"
                            >
                              Burnable
                            </label>
                          </div>
                        </span>
                        <span>
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexSwitchCheckDefault"
                            >
                              Mintable
                            </label>
                          </div>
                        </span>
                        <span>
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexSwitchCheckDefault"
                            >
                              ERC1363
                            </label>
                          </div>
                        </span>
                        <span>
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexSwitchCheckDefault"
                            >
                              Token Recover
                            </label>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                    <div class="card mt-3">
                      <h5 class="card-header bg-dark text-white">
                        Token Type and Network
                      </h5>
                      <div class="card-body">
                        <span>
                          <div class="form-group">
                            <label for="exampleFormControlSelect1">
                              Token Type
                            </label>
                            <select
                              class="form-control"
                              id="exampleFormControlSelect1"
                            >
                              <option>HelloERC20</option>
                              <option>SimpleERC20</option>
                              <option>StandardERC20</option>
                              <option>BurnableERC20</option>
                              <option>MintableERC20</option>
                              <option>PausableERC20</option>
                              <option>CommonERC20</option>
                              <option>UnlimitedERC20</option>
                              <option>AmazingERC20</option>
                              <option>PowerfulERC20</option>
                            </select>
                            <small
                              id="exampleFormControlSelect1"
                              class="form-text text-muted"
                            >
                              Choose your Token Type.
                            </small>
                          </div>
                        </span>
                        <span>
                          <div class="form-group">
                            <label for="exampleFormControlSelect1">
                              Network
                            </label>
                            <select
                              class="form-control"
                              id="exampleFormControlSelect1"
                              onChange={e => setNetwork(e.target.value)}
                            >
                              <option>Main Ethereum Network</option>
                              <option>Ropsten Test Network</option>
                              <option>Rinkeby Test Network</option>
                              <option>Kovan Test Network</option>
                              <option>Goerli Test Network</option>
                            </select>
                            <small
                              id="exampleFormControlSelect1"
                              class="form-text text-muted"
                            >
                              Choose your Network.
                            </small>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div class="card mt-3">
                      <div class="card-header bg-dark text-white">
                        Agreement
                      </div>
                      <div class="card-body">
                        <span>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              <span>
                                I have read, understood and agreed to Token
                                Generator's{" "}
                                <a
                                  href="https://sunrisetechs.com/"
                                  target="_blank"
                                >
                                  Terms of Use.
                                </a>
                              </span>
                            </label>
                          </div>
                        </span>
                      </div>
                    </div>

                    <div class="card mt-3">
                      <div class="card-header bg-dark text-white bg-info">
                        Featured
                      </div>
                      <div class="card-body">
                        <div class="card">
                          <div class="list-group list-group-flush">
                            <div class="list-group-item d-flex justify-content-between">
                              <span>Commission Fee</span>
                              <span class="badge bg-success">0 ETH</span>
                            </div>
                            <div class="list-group-item d-flex justify-content-between">
                              <span>Gas Fee</span>
                              <span class="badge bg-info">Variable</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                    <button style={{width:'466px',marginLeft:'21px'}} className="btn ml-2 mb-3 mt-3 py-3 px-5 text-uppercase btn-success btn-lg btn-block">
                      CONFIRM
                    </button>
                    </div>
                  </div>
                </div>

                {/* {success && (
                      <span className="success">
                        Successful.You can log in now!
                      </span>
                    )}
                    {failure && (
                      <span className="failure">Something went wrong!</span>
                    )} */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default POCForm;
