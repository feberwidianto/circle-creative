import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Button,
  Input,
  Card,
  Label,
  CustomInput,
  Row,
  Col
} from "reactstrap";

export default class Daftar extends Component {
  handleName = () => {};
  handleDate = () => {};
  handleTime = () => {};
  handleRoom = () => {};

  render() {
    return (
      <div
        className="daftar-pages"
        style={{
          fontFamily: "ubuntu",
          width: "100%",
          height: "40rem",
          margin: "0px",
          backgroundImage:
            "url(" +
            "https://images.unsplash.com/photo-1547567667-1aa64e6f58dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          className="navbar-brand"
          style={{
            height: "5rem",
            width: "100%",
            margin: "0rem",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Card
            className="form-card"
            style={{
              width: "29%",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "61.5%",
              marginTop: "7%",
              marginBottom: "1rem",
              borderRadius: "25px"
            }}
          >
            <Card
              className="judul-form"
              color="info"
              style={{
                borderRadius: "30px",
                border: "0px",
                height: "4rem",
                width: "70%",
                marginTop: "-30px",
                color: "whitesmoke",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Form Pendaftaran
            </Card>
            <Form
              style={{
                marginBottom: "1rem",
                marginTop: "1rem",
                fontSize: "12px",
                width: "90%"
              }}
            >
              <FormGroup>
                <Label for="name">Nama</Label>
                <Input
                  name="name"
                  id="name"
                  placeholder="Masukan nama lengkap"
                  style={{ fontSize: "12px" }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Alamat</Label>
                <Input
                  name="addres"
                  id="addres"
                  placeholder="Masukan alamat lengkap"
                  style={{ fontSize: "12px" }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="date">Jadwal Mulai Belajar</Label>
                <Input
                  name="date"
                  type="date"
                  id="date"
                  placeholder="Tanggal mulai belajar"
                  style={{ fontSize: "12px" }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="time">Waktu Pertemuan</Label>
                <Input
                  name="time"
                  type="time"
                  id="time"
                  placeholder="Waktu pertemuan"
                  style={{ fontSize: "12px" }}
                />
              </FormGroup>
              <Row form style={{ marginBottom: "5px" }}>
                <Col md={3}>
                  <div inline>
                    <CustomInput type="checkbox" id="Monday" label="Senin" />
                    <CustomInput type="checkbox" id="Tuesday" label="Selasa" />
                  </div>
                </Col>
                <Col md={3}>
                  <div inline>
                    <CustomInput type="checkbox" id="Wednesday" label="Rabu" />
                    <CustomInput type="checkbox" id="Thursday" label="Kamis" />
                  </div>
                </Col>
                <Col md={3}>
                  <div>
                    <CustomInput type="checkbox" id="Friday" label="Jumat" />
                    <CustomInput type="checkbox" id="Saturday" label="Sabtu" />
                  </div>
                </Col>
                <Col md={3}>
                  <div>
                    <CustomInput type="checkbox" id="Sunday" label="Minggu" />
                  </div>
                </Col>
              </Row>
              <FormGroup>
                <Label for="room">Tentor</Label>
                <Input
                  type="select"
                  name="room"
                  id="room"
                  style={{ fontSize: "12px" }}
                >
                  <option>Laki-laki</option>
                  <option>Perempuan</option>
                  <option>Bisa keduanya</option>
                </Input>
              </FormGroup>
              <FormGroup check>
                <CustomInput
                  type="checkbox"
                  id="syarat"
                  label="Setuju syarat dan ketentuan"
                  style={{ fontSize: "12px" }}
                />
              </FormGroup>
              <FormGroup style={{ float: "right", marginTop: "1rem" }}>
                <Button
                  color="info"
                  outline
                  href="/"
                  style={{
                    borderRadius: "25px",
                    marginRight: "1rem"
                  }}
                >
                  Lihat Tentor
                </Button>
                <Button color="info" style={{ borderRadius: "25px" }}>
                  <strong> Daftar </strong>
                </Button>
              </FormGroup>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}
