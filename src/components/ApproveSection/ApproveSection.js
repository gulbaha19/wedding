import { useState } from "react";
import "./approveSection.css";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ApproveSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [alert, setAlert] = useState(false);

  const [openModalReject, setOpenModalReject] = useState(false);

  const [people, setPeople] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [children, setChildren] = useState(false);
  const random = Math.random();
  const handleChange = (event) => {
    setPeople(event.target.value);
  };

  const handleSend = () => {
    axios.post(
      `https://wedding-4b188-default-rtdb.asia-southeast1.firebasedatabase.app/guests.json?api_key=AIzaSyB7e-LYqyYjH9j8Hynpg-RJFwUeL6Bi8cI`,
      { name: name, attendance: true, children: children, count: people },
    );
    setOpenModal(false);
    setAlert(true);
    setTimeout(() => setAlert(false), 2000);
  };
  const handleSendReject = () => {
    axios.post(
      `https://wedding-4b188-default-rtdb.asia-southeast1.firebasedatabase.app/notComing.json?api_key=AIzaSyB7e-LYqyYjH9j8Hynpg-RJFwUeL6Bi8cI`,
      { name: name, attendance: false, children: false, count: 0, message: message },
    );
    setOpenModalReject(false);
  };
  return (
    <div className="approveWrap">
      <img
        src="https://wedinvent.ru/css/lace/img/pic-guest-flowers-1.png"
        alt=""
        className="flowers"
      />
      <div>
        <p className="approveText">
          Приглашаем вас на нашу свадьбу! <br />
          Мы будем очень рады, если вы проведете вместе с нами этот особенный день.
        </p>
        <p className="approve">Пожалуйста, подтвердите или отклоните участие</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="btnApprove" onClick={() => setOpenModal(true)}>
            Подтвердить
          </button>
          <button className="btnReject" onClick={() => setOpenModalReject(true)}>
            Отклонить
          </button>
        </div>
      </div>

      <img
        src="https://wedinvent.ru/css/lace/img/pic-guest-flowers-1.png"
        alt=""
        className="flowersBottom"
      />
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <h2>Я принимаю приглашение</h2>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Подтвердите количество персон</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={people}
              label="Подтвердите количество персон"
              onChange={handleChange}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
          <p>Ваши имена и фамилию</p>
          <TextField
            id="outlined-basic"
            label="Ваши имена и фамилия"
            variant="outlined"
            style={{ width: "100%" }}
            onChange={(e) => setName(e.target.value)}
          />
          <p>
            Вы будете с детьми?
            <Checkbox checked={children} onChange={() => setChildren(!children)} />
          </p>
          <Button onClick={() => handleSend()}> Отправить </Button>
        </Box>
      </Modal>
      <Modal
        open={openModalReject}
        onClose={() => setOpenModalReject(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <h2>Я не смогу быть</h2>

          <p>Ваши имена и фамилию</p>
          <TextField
            id="outlined-basic"
            label="Ваши имена и фамилия"
            variant="outlined"
            style={{ width: "100%" }}
            onChange={(e) => setName(e.target.value)}
          />
          <h3>Сообщение молодоженам</h3>

          <textarea
            style={{ width: "100%", marginTop: "20px", height: "90px" }}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button onClick={() => handleSendReject()}> Отправить </Button>
        </Box>
      </Modal>
      <Modal
        open={alert}
        onClose={() => setAlert(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Alert severity="success">
            <AlertTitle>Спасибо!</AlertTitle>
            Ждем Вас<strong>!</strong>
          </Alert>
        </Box>
      </Modal>
    </div>
  );
};
export default ApproveSection;
