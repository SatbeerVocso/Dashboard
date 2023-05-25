import React from "react"
import { ArcherContainer, ArcherElement } from "react-archer"
import avatarImg3 from "../../assets/images/users/avatar-3.jpg"
import avatarImg4 from "../../assets/images/users/avatar-4.jpg"
import avatarImg5 from "../../assets/images/users/avatar-5.jpg"
import { Checkmark } from "react-checkmark"
import { CardBody } from "reactstrap"

function RequestProgressBar(props) {
  const rowStyle = {
    margin: "30px 0",
    display: "flex",
    justifyContent: "space-between",
  }
  const picstyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "30%",
  }

  return (
    <div style={{ marginLeft: "2em" }}>
      <ArcherContainer strokeColor="#31376d" strokeWidth={1.3}>
        <div style={rowStyle}>
          <div>
            <div style={picstyle}>
              <h6>Initiated By: {props.user.assigned_to}</h6>
              <div>
                <ArcherElement
                  id="element1"
                  relations={[
                    {
                      targetId: "element2",
                      targetAnchor: "left",
                      sourceAnchor: "right",
                    },
                  ]}
                >
                  <img
                    className="avatar-sm rounded-circle mb-2"
                    src={props.user.assignee_avatar}
                    alt="Assignee Avatar"
                  />
                </ArcherElement>
              </div>
              <Checkmark size="medium" />
            </div>
          </div>

          <div>
            <div style={picstyle}>
              <h6>Approval by: James A</h6>
              <ArcherElement
                id="element2"
                relations={[
                  {
                    targetId: "element3",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                  },
                ]}
              >
                <img
                  className="avatar-sm rounded-circle mb-2"
                  src={avatarImg3}
                  alt="Avatar 3"
                />
              </ArcherElement>

              <Checkmark size="medium" />
            </div>
          </div>

          <div>
            <div style={picstyle}>
              <h6>Approval by: James B</h6>
              <ArcherElement
                id="element3"
                relations={[
                  {
                    targetId: "element4",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                  },
                ]}
              >
                <img
                  className="avatar-sm rounded-circle mb-2"
                  src={avatarImg4}
                  alt="Avatar 4"
                />
              </ArcherElement>
              <Checkmark size="medium" />
            </div>
          </div>

          <div>
            <div style={picstyle}>
              <h6>Approval by: James C</h6>
              <ArcherElement id="element4" relations={[]}>
                <img
                  className="avatar-sm rounded-circle mb-2"
                  src={avatarImg5}
                  alt="Avatar 5"
                />
              </ArcherElement>

              <Checkmark size="medium" />
            </div>
          </div>
        </div>
      </ArcherContainer>
    </div>
  )
}

export default RequestProgressBar
