import React, { useEffect, useState } from "react";
import ServerCall from "../Components/ServerCall";

export default function Home() {
  const [twit, setTwit] = useState("");
  const [twits, setTwits] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    getTwits();
  }, []);

  const getTwits = async () => {
    try {
      const response = await ServerCall.get("twit");
      if (response.status) {
        setTwits(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setTwit(value);
  };
  
  const handleCommentChange = (e) => {
    const { value } = e.target;
    setComment(value);
  };

  const handleTwit = async (e) => {
    e.preventDefault();
    try {
      const response = await ServerCall.post("twit", { twit });
      if (response.status) {
        // toast
        //get twits
        setTwit("")
        getTwits();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    const {id} = e.target;
    try {
      const response = await ServerCall.post(`twit/${id}/comment`, { comment });
      if (response.status) {
        // toast
        setComment("");
        getTwits();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container my-4">
      <h3>Twitee</h3>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleTwit} className="col-md-6">
          <div className="form-group">
            <textarea
              name="twit"
              value={twit}
              className="form-control"
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-dark mt-2">
            Twit
          </button>
        </form>
      </div>
      <div className="d-flex justify-content-center">
        <div className="my-3 col-md-6">
          {twits.map((twit, index) => (
            <div className="card my-2" key={index}>
              <div className="card-body">
                <h5 className="card-title">{twit.User.name}</h5>
                <p className="card-text">{twit.twit}</p>
                <div className="my-3">
                  <h6>Comments</h6>
                  {twit?.Comments?.map((comment, index) => (
                    <div className="card my-2" key={index}>
                      <div className="card-body">
                        <p className="card-text">{comment.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <form id={twit.id} onSubmit={handleComment}>
                  <div className="form-group">
                    <textarea
                      name="twit"
                      value={comment}
                      className="form-control"
                      onChange={handleCommentChange}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-dark mt-2">
                    Comment
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
