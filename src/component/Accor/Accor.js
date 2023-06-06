import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Accor.css";
export default function SimpleAccordion() {
  return (
    <div className="accor">
      <div>
        <h2>Event Schedule</h2>
        <span>
          Understand that theory is important to build a solid foundation, we
          understand that theory alone
        </span>
      </div>
      <div className="ccr">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Day-1 (Wed, january 1)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Grad Openning (8:00 Am)
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Day-2 (Thu, january 2)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Grad Openning (8:00 Am) Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography sx={{ color: "black" }}>
              Day-3 (NOT Availabel)$$
            </Typography>
          </AccordionSummary>
        </Accordion>
      </div>
    </div>
  );
}
