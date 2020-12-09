import React from "react";
import { Button, Card } from "react-bootstrap";

export default function Notebook({
  type,
  notebookName,
  imageUrl,
  createdAt,
  userName,
}) {
  return (
    <Card
      bg="Light"
      style={{ width: "18rem", height: "12rem", margin: "10px" }}
      className="mb-2"
    >
      <Card.Header>{notebookName}</Card.Header>
      <Card.Body>
        <Card.Text>
          <div>
            {imageUrl ? (
              <Card.Img
                style={{ height: "2rem", width: "auto" }}
                src={imageUrl}
                alt="profile"
              />
            ) : null}
            {userName}
          </div>
          <Button style={{ margin: "10px" }} size="sm">
            Check out {`${type}`}
          </Button>
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ height: "1rem", fontSize: "12px" }}>
        <div style={{ marginTop: "-10px" }}>{createdAt}</div>
      </Card.Footer>
    </Card>
  );
}
