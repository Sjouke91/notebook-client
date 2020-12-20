import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { selectMyNotebooksIds } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import SwitchButton from "../../components/SwitchButton";
import { editPublicState } from "../../store/user/actions";
import Switch from "@material-ui/core/Switch";

export default function Notebook({
  type,
  notebookName,
  imageUrl,
  createdAt,
  userName,
  notebookId,
  notebookState,
}) {
  const history = useHistory();
  const usersNotebooks = useSelector(selectMyNotebooksIds);
  const [isPrivate, set_private] = useState(notebookState);
  const dispatch = useDispatch();

  const onClickRedirect = () => {
    history.push(`/show-notebook/${notebookId}`);
  };

  const onClickUpdate = (e) => {
    set_private(!isPrivate);
    dispatch(editPublicState(isPrivate, notebookId));
  };

  return (
    <Card
      style={{
        width: "22rem",
        height: "16rem",
        margin: "15px",
        paddingTop: 10,
      }}
    >
      <Typography variant="h4" style={{ marginLeft: 20 }}>
        {notebookName}
      </Typography>

      <CardContent>
        {usersNotebooks.includes(notebookId) ? (
          <div style={{ display: "flex" }}>
            <p>Set public:</p>
            <Switch
              onChange={(e) => onClickUpdate(e)}
              color="primary"
              checked={isPrivate}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </div>
        ) : (
          <p>false</p>
        )}
        <div>
          {imageUrl ? (
            <Avatar style={{ marginLeft: 20 }} src={imageUrl} alt="profile" />
          ) : null}
          <div style={{ marginLeft: 20 }}>{userName}</div>
        </div>
        <Button
          style={{ margin: "10px" }}
          onClick={() => onClickRedirect()}
          size="sm"
          color="primary"
          variant="contained"
        >
          Check out {`${type}`}
        </Button>
        <div style={{ margin: "10px" }}>{createdAt}</div>
      </CardContent>
    </Card>
  );
}
