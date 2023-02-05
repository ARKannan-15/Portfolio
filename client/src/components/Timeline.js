import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { fontSize } from "@mui/system";
function Timeliner() {
  return (
    <div className="App">
    <link rel="stylesheet" href="styles.css" />
      <div
        className="head"
        style={{
          width: "fit-content",
          margin: "auto",
        }}
      >
        <h1
          style={{
            color: "#EAEAEA",
            fontFamily:"Poppins",
            fontSize:"12rem"
          }}
        >
          Education
        </h1>
        
      </div>
  
      <Timeline>
        <TimelineItem position="left">
          <TimelineSeparator>
            <TimelineDot color= "grey" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>2024</TimelineContent>
        </TimelineItem>
        <br/><br/>
        <TimelineItem position="left">
          <TimelineSeparator>
            <TimelineDot color="grey" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>2020</TimelineContent>
        </TimelineItem>
        <TimelineItem >
          <TimelineContent>2028</TimelineContent>
        </TimelineItem>
        
        <br/><br/>
        <TimelineItem  position="left">
          <TimelineSeparator>
          <br />
            <TimelineDot color="grey" variant="outlined" />
             </TimelineSeparator>
          <TimelineContent>2018</TimelineContent>
        </TimelineItem>
        
       </Timeline>

       <div >
        <h2>2018</h2>
       </div>
    </div>
  );
}
  
export default Timeliner;