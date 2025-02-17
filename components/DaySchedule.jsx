import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import * as React from "react";

const DailySchedule = () => {
  return (
    <div className="py-16">
      <h1 align="center" className="text-2xl md:text-4xl tracking-wider font-bold font-primary ">
        Tour Timeline
      </h1>
      <div className=" m-5 lg:mt-6">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="righ"
              variant="body2"
              color="text.secondary"
              className="!font-secondary !font-medium"
            >
              28 February 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot className="w-36 h-28">
                <img src="start1.png" alt="" className="" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{ py: "12px", px: 2 }}
              className="flex items-center"
            >
              <p className="font-medium font-secondary text-xl">Tour Start</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
              className="!font-secondary !font-medium"
            >
              29 February 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot className="w-36 !bg-blue-400/80" variant="outlined">
                <img src="enjoy.png" alt="" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <ul className="">
                <li className="space-x-2 font-secondary text-lg font-medium">
                  <span className="text-xs text-gray-700 font-light">
                    9:00AM
                  </span>
                  <span className="">Breakfast</span>{" "}
                </li>
                <li className="space-x-2 font-secondary text-lg font-medium">
                  <span className="text-xs text-gray-700 font-light">
                    10:30AM
                  </span>
                  <span className=""> Ship Journey  </span>{" "}
                </li>
                <li className="space-x-2 font-secondary text-lg font-medium">
                  <span className="text-xs text-gray-700 font-light">
                    2:00pM
                  </span>
                  <span className=""> Cheak in  </span>{" "}
                </li>
                <li className="space-x-2 font-secondary text-lg font-medium">
                  <span className="text-xs text-gray-700 font-light">
                    2:00PM
                  </span>
                  <span className=""> Lunch </span>{" "}
                </li>

                <li className="space-x-2 font-secondary text-lg font-medium">
                  <span className="text-xs text-gray-700 font-light">
                    4:00pM
                  </span>
                  <span className="">Segment </span>{" "}
                </li>
                <li className="space-x-2 font-secondary text-lg font-medium">
                  <span className="text-xs text-gray-700 font-light">
                    9:00PM
                  </span>
                  <span className="">Dinner</span>{" "}
                </li>
                <li className="space-x-2 font-secondary text-lg font-medium">
                  <span className="text-xs text-gray-700 font-light">
                    10:00PM
                  </span>
                  <span className=""> Chitchat </span>{" "}
                </li>
              </ul>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
              className="!font-secondary !font-medium"
            >
              1 March 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot className="w-36 !bg-gray-200 !shadow">
                <img src="cultural.png" alt="" />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <ul className="">
                <li className="space-x-2 font-secondary text-lg font-medium">
                  <span className="text-xs text-gray-700 font-light">
                    9:00AM
                  </span>
                  <span className="">Breakfast</span>{" "}
                </li>
                <li className="space-x-2 font-secondary text-lg font-medium">
                  <span className="text-xs text-gray-700 font-light">
                    11:00AM
                  </span>
                  <span className=""> Goto Chera Island </span>{" "}
                </li>
                <li className="space-x-2 font-secondary text-lg font-medium">
                  <span className="text-xs text-gray-700 font-light">
                    02:00PM
                  </span>
                  <span className=""> Lunch </span>{" "}
                </li>
                <li className="space-x-2 font-secondary text-lg font-medium">
                  <span className="text-xs text-gray-700 font-light">
                    4:00PM
                  </span>
                  <span className=""> Segment  </span>{" "}
                </li>

                <li className="space-x-2 font-secondary text-lg font-medium">
                  <span className="text-xs text-gray-700 font-light">
                    9:00PM
                  </span>
                  <span className=""> BBQ </span>{" "}
                </li>
                <li className="space-x-2 font-secondary text-lg font-medium">
                  <span className="text-xs text-gray-700 font-light">
                    10:00AM
                  </span>
                  <span className="text-xl text-green-400 font-bold "> Cultural Program  </span>{" "}
                </li>
              </ul>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
              className="!font-secondary !font-medium"
            >
              3 March 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot
                className="w-36 !bg-purple-100 !shadow !border"
                variant=""
              >
                <img src="dinner.png" alt="" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <ul className="">
                <li className="space-x-2 font-secondary text-lg font-medium">
                  <span className="text-xs text-gray-700 font-light">
                    9:00AM
                  </span>
                  <span className="">Breakfast</span>{" "}
                </li>
                <li className="space-x-2 font-secondary text-lg font-medium">
                  <span className="text-xs text-gray-700 font-light">
                    11:00AM
                  </span>
                  <span className=""> Bag and Baggage  </span>{" "}
                </li>
                <li className="space-x-2 font-secondary text-lg font-medium">
                  <span className="text-xs text-gray-700 font-light">
                    2:00PM
                  </span>
                  <span className=""> Lunch </span>{" "}
                </li>
                <li className="space-x-2 font-secondary text-lg font-medium">
                  <span className="text-xs text-gray-700 font-light">
                    3:00AM
                  </span>
                  <span className=""> Cheack Out </span>{" "}
                </li>

                <li className="space-x-2 font-secondary text-lg font-medium">
                  <span className="text-xs text-gray-700 font-light">
                    5:00PM
                  </span>
                  <span className=""> Return to Teknaf  </span>{" "}
                </li>
                <li className="space-x-2 font-secondary text-lg font-medium">
                  <span className="text-xs text-gray-700 font-light">
                    9:00PM
                  </span>
                  <span className="text-2xl text-red-500 font-bold "> Cox-Bazar Dinnar Night   </span>{" "}
                </li>
                <li className="space-x-2 font-secondary text-lg font-medium">
                  <span className="text-xs text-gray-700 font-light">
                    11:00PM
                  </span>
                  <span className="text-2xl text-red-500 font-bold "> Return   </span>{" "}
                </li>


              </ul>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
              className="!font-secondary !font-medium"
            >
              3 March 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot className="w-36 h-28 !bg-violet-200 !shadow">
                <img src="start.gif" alt="" className="" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{ py: "12px", px: 2 }}
              className="flex items-center"
            >
              <p className="font-medium font-secondary text-xl">Back to Home</p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default DailySchedule;
