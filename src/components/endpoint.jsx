import { useParams, useSearchParams } from "react-router-dom";
import { Typography, Box, Tooltip, List, ListItem, Stack } from "@mui/material";
import { useEffect, useState } from "react";

const exrequest = [
  {
    id: "login",
    link: "POST https://my-event-management-server/api/auth/login",
    payload: `     username: "johndoe",
     password: "password123"`,
  },
  {
    id: "register",
    link: "POST https://my-event-management-server/api/auth/register",
    payload: `     username: "jondoe",
     email: "jondoe@email.com",
     password: "password123",
     firstName: "Jon",
     lastName: "Doe"`,
  },
  {
    id: "logout",
    link: "GET https://my-event-management-server/api/auth/logout",
  },
  {
    id: "get-user",
    link: "GET https://my-event-management-server/api/user/johndoe",
  },
  {
    id: "get-events",
    link: "GET https://my-event-management-server/api/events",
  },
  {
    id: "post-events",
    link: "POST https://my-event-management-server/api/events",
    payload: `     userId: 1,
     eventTitle: "Event 1",
     description: "Description of event 1",
     date: "2022-12-12T12:00:00",
     location: "Location of event 1",
     maxAttendees: 100`,
  },
  {
    id: "patch-events",
    link: "PATCH https://my-event-management-server/api/events/1",
    payload: `     eventTitle: "Event 1",
     description: "Description of event 1",
     date: "2022-12-12T12:00:00",
     location: "Location of event 1",
     maxAttendees: 100`,
  },
  {
    id: "delete-events",
    link: "DELETE https://my-event-management-server/api/events/1",
  },
  {
    id: "get-my-events",
    link: "GET https://my-event-management-server/api/my-events",
  },
  {
    id: "post-my-events",
    link: "POST https://my-event-management-server/api/my-events/1/2",
  },
  {
    id: "delete-my-events",
    link: "DELETE https://my-event-management-server/api/my-events/1/2",
  },
];

const exresponse = [
  {
    id: "login",
    status: "Success",
    message: "Logged in successfully",
    token: "e17tb87tb876b8r.76b7t6g6r756...qwe12e8912ue",
  },
  {
    id: "register",
    status: "Success",
    message: "Registered successfully",
    data: `         data:{
                id: 1,
                username: "johndoe",
                email: "jondoe@email.com",
                firstName: "John",
                lastName: "Doe",
              }`,
  },
  {
    id: "logout",
    message: "Logged out successfully",
  },
  {
    id: "get-user",
    status: "Success",
    data: `         data:{
                id: 1,
                username: "johndoe",
                email: "jondoe@email.com",
              },`,
  },
  {
    id: "get-events",
    status: "Success",
    message: "Fetched events successfully",
    data: `         data:[
                {
                    id: 1,
                    event_name: "Event 1",
                    organizerId: "2",
                    reminders: "Reminders of event 1",
                    location: "Location of event 1",
                    max_participants: 200,
                    registered_participants: 150,
                    date: "2022-12-12",
                    time: "12:00",
                },
                ...
                {
                    id: 10,
                    event_name: "Event 10",
                    organizerId: "1",
                    reminders: "Reminders of event 10",
                    location: "Location of event 10",
                    max_participants: 100,
                    registered_participants: 100,
                    date: "2022-12-12",
                    time: "12:00",
                }
            ]
      `,
  },
  {
    id: "post-events",
    status: "Success",
    message: "Created event successfully.",
    data: `         data:{
                id: 1,
                event_name: "Event 1",
                reminders: "Reminders of event 1",
                location: "Location of event 1",
                max_participants: 100,
                date: "2022-12-12",
                time: "12:00",
              }`,
  },
  {
    id: "patch-events",
    status: "Success",
    message: "Updated event successfully.",
    data: `         data:{
                id: 1,
                event_name: "Event 1",
                reminders: "Description of event 1",
                location: "Location of event 1",
                max_participants: 100,
                date: "2022-12-12",
                time: "12:00",
              }`,
  },
  {
    id: "delete-events",
    status: "Success",
    message: "Deleted event successfully.",
  },
  {
    id: "get-my-events",
    status: "Success",
    message: "Joined events fetched successfully.",
    data: `         data:[
                  1,
                  ...
                  10,
              ]`,
  },
  {
    id: "post-my-events",
    status: "Success",
    message: "Registered for event successfully.",
    data: `     data:{
            event_id: 1,
            }`,
  },
  {
    id: "delete-my-events",
    status: "Success",
    message: "Withdrawn for event successfully.",
  },
];

const errors = [
  {
    errorcode: "400 Bad Request: ",
    description: "Missing or invalid parameters",
  },
  {
    errorcode: "401 Unauthorized:",
    description: " Invalid or missing authentication token",
  },
  {
    errorcode: "403 Forbidden:",
    description: " Insufficient permissions",
  },
  {
    errorcode: "500 Server Error:",
    description: " Internal server error",
  },
];

export default function Endpoint() {
  const [ENDPOINTS, setENDPOINTS] = useState([]);
  const [ENDPOINT, setENDPOINT] = useState({});
  const [RESPONSE, setRESPONSE] = useState({});
  const [REQUEST, setREQUEST] = useState({});
  const params = useParams();
  const { endpoint } = params;
  useEffect(() => {
    const importEndpoints = async () => {
      const response = await fetch("/endpoints.json");
      const ENDPOINTS = await response.json();
      ENDPOINTS.filter((ENDPOINT) => {
        if (ENDPOINT.id === endpoint) {
          console.log(ENDPOINT.successResponse.message);
          setENDPOINT(ENDPOINT);
        }
      });
      exresponse.filter((r) => {
        if (r.id === endpoint) {
          setRESPONSE(r);
        }
      });
      exrequest.filter((r) => {
        if (r.id === endpoint) {
          setREQUEST(r);
        }
      });
    };
    importEndpoints();
  }, []);
  const e = `[
    {`;

  const z = `    }
]`;

  return (
    <Box
      sx={{
        display: "flex",
        width: 1,
        height: "100%",
        padding: "20px",
        justifyContent: "center",
      }}
    >
      <Stack direction={"column"} spacing={4} sx={{ width: "80%" }}>
        <Typography variant="eight">{ENDPOINT.id}</Typography>
        <Stack spacing={0.5}>
          <Typography variant="four">Description</Typography>
          <Typography variant="two">{ENDPOINT.purpose}</Typography>
        </Stack>
        <Stack spacing={0.5}>
          <Typography variant="four">BASE URL</Typography>
          <Typography variant="two" color="error">
            https://my-event-management-server
          </Typography>
        </Stack>
        <Stack spacing={0.5}>
          <Typography variant="four">END POINT</Typography>
          <Typography variant="two" color="error">
            {ENDPOINT.endpoint}
          </Typography>
        </Stack>
        {ENDPOINT.queryParameters == undefined &&
        ENDPOINT.optionalBody == undefined &&
        ENDPOINT.requiredBody == undefined ? null : (
          <Stack spacing={0.5}>
            <Typography variant="four">PARAMETERS</Typography>
            {ENDPOINT.queryParameters == undefined ? null : (
              <>
                <Typography variant="three">Query Parameters</Typography>
                <List>
                  {Object.entries(ENDPOINT.queryParameters).map(
                    ([key, value]) => {
                      return (
                        <ListItem>
                          <Typography variant="two">
                            &#8226;{" "}
                            <Typography variant="two" color="error">
                              {key}{" "}
                            </Typography>
                            : {value}
                          </Typography>
                        </ListItem>
                      );
                    }
                  )}
                </List>
              </>
            )}
            {ENDPOINT.optionalBody == undefined ? null : (
              <>
                <Typography variant="three">Optional Payload</Typography>
                <List>
                  {Object.entries(ENDPOINT.optionalBody).map(([key, value]) => {
                    return (
                      <ListItem>
                        <Typography variant="two">
                          &#8226;{" "}
                          <Typography variant="two" color="error">
                            {key}{" "}
                          </Typography>
                          : {value}
                        </Typography>
                      </ListItem>
                    );
                  })}
                </List>
              </>
            )}
            {ENDPOINT.requiredBody == undefined ? null : (
              <>
                <Typography variant="three">Required Payload</Typography>
                <List>
                  {Object.entries(ENDPOINT.requiredBody).map(([key, value]) => {
                    return (
                      <ListItem>
                        <Typography variant="two">
                          &#8226;{" "}
                          <Typography variant="two" color="error">
                            {key}{" "}
                          </Typography>
                          : {value}
                        </Typography>
                      </ListItem>
                    );
                  })}
                </List>
              </>
            )}
          </Stack>
        )}

        <Stack spacing={0.5}>
          <Typography variant="four">RESPONSE</Typography>

          <Stack spacing={0.5}>
            {ENDPOINT.successResponse == undefined ? null : (
              <>
                <Typography variant="two">
                  &#8226;{" "}
                  <Typography variant="two" color="error">
                    Message{" "}
                  </Typography>
                  : {ENDPOINT.successResponse.message}
                </Typography>
                <Typography variant="two">
                  &#8226;{" "}
                  <Typography variant="two" color="error">
                    Status{" "}
                  </Typography>{" "}
                  : {ENDPOINT.successResponse.status}
                </Typography>
                {typeof ENDPOINT.successResponse.data === "string" &&
                ENDPOINT.successResponse.data != undefined ? (
                  <Typography variant="two">
                    Data: {ENDPOINT.successResponse.data}
                  </Typography>
                ) : ENDPOINT.successResponse.data == undefined ? null : (
                  <List>
                    <Typography variant="three">Data{`{}`}</Typography>
                    {Object.entries(ENDPOINT.successResponse.data).map(
                      ([key, value]) => {
                        return (
                          <ListItem>
                            <Typography variant="two">
                              &#8226;{" "}
                              <Typography variant="two" color="error">
                                {key}{" "}
                              </Typography>
                              : {value}
                            </Typography>
                          </ListItem>
                        );
                      }
                    )}
                  </List>
                )}
              </>
            )}
          </Stack>
        </Stack>
        <Stack spacing={0.5}>
          <Typography variant="four">EXAMPLE</Typography>
          <Typography variant="three" sx={{ bgcolor: "#EAEAEA", padding: 2 }}>
            Request
            {REQUEST.link == undefined ? null : <pre>{REQUEST.link}</pre>}
            {REQUEST.payload == undefined ? null : (
              <>
                <br />
                <pre>{e}</pre>
                <pre>{REQUEST.payload}</pre>
                <pre>{z}</pre>
              </>
            )}
          </Typography>
          <Typography variant="three" sx={{ bgcolor: "#EAEAEA", padding: 2 }}>
            Response
            <pre>{e}</pre>
            {RESPONSE.status === undefined ? null : (
              <pre>
                {" "}
                {"    "}status: "{RESPONSE.status}"
              </pre>
            )}
            <pre>
              {"    "} message: "{RESPONSE.message}"
            </pre>
            {RESPONSE.data == undefined ? null : <pre>{RESPONSE.data}</pre>}
            <pre>{z}</pre>
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography variant="four">Authentication</Typography>
          <Typography variant="two">
            All protected routes require a valid JWT token in the Authorization
            header:
          </Typography>
          <Typography variant="two" sx={{ bgcolor: "#EAEAEA", padding: 2 }}>
            Authorization: Bearer {"<your_jwt_token>"}
          </Typography>
        </Stack>
        <Stack spacing={0.5}>
          <Typography variant="four">ERRORS</Typography>
          <List>
            {errors.map((error) => {
              return (
                <ListItem>
                  <Typography variant="two">
                    &#8226;{" "}
                    <Typography variant="two" color="error">
                      {error.errorcode}{" "}
                    </Typography>
                    : {error.description}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
          <Typography variant="three" sx={{ bgcolor: "#EAEAEA", padding: 2 }}>
            Error Response
            <pre>
              {`        [
              {
                "status": "error",
                "message": "Error description",
                "error": "Error details"
              }
        ]`}
            </pre>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
