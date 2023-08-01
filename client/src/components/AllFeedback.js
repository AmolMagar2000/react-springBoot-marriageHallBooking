import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// const getFeedbacks = async () => {
//     try {
//         const { data } = await axios.get("/api/feedback");
//         feedbacks = data;
//     } catch (error) {
//         console.log(error.response);
//     }
// };

export function AllFeedback() {
  const [feedbacks, setFeedbacks] = useState(null);
  useEffect(() => {
    axios.get("/api/feedback").then((res) => {
      setFeedbacks(res.data);
    });
  }, ["/api/feedback"]);

  console.log(feedbacks);

  const deleteFeedback = async (feedbackId) => {
    try {
      await axios.delete(`/api/feedback/${feedbackId}`);
      axios.get("/api/feedback").then((res) => {
        setFeedbacks(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ marginLeft: 36 }}>
      {feedbacks !== null ? (
        <div>
          {feedbacks.map((feedback) => {
            return (
              <>
                <Card style={{ width: "18rem" }}>
                  <Card.Body key={feedback.id}>
                    <Card.Title>{feedback.name}</Card.Title>
                    <Card.Text>{feedback.comments}</Card.Text>
                    {/* <Link to='/update-feed'><Button variant="primary">Update</Button></Link> */}
                    {/* <Button variant="primary" onClick={() => deleteFeedback(feedback.id)}>Delete</Button> */}
                  </Card.Body>
                </Card>
                <br />
                <br />
              </>
            );
          })}
        </div>
      ) : (
        <div>
          <h4>Feedback Loading...</h4>
        </div>
      )}
      <div>
        <Link to="/Feedback">
          <Button variant="primary">Give Feedback</Button>
        </Link>
      </div>
    </div>
  );
}
