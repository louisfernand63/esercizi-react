import React from "react";
import { Card } from "react-bootstrap";

function MyFooter() {
  return (
    <>
      <footer>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>
              <p>&copy; 2024 My EpiBooks Footer App Shop. All rights reserved.</p>
            </Card.Title>
          </Card.Body>
        </Card>
      </footer>
    </>
  );
}

export default MyFooter;
