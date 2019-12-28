import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Button,
  Input,
  Card,
  Label,
  Row,
  Col
} from "reactstrap";

export default class CariTentor extends Component {
  render() {
    return (
      <div
        className="caritentor-pages"
        style={{
          fontFamily: "ubuntu",
          width: "100%",
          height: "40rem",
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
            style={{
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "25%",
              marginTop: "30%",
              marginBottom: "1rem",
              borderRadius: "25px"
            }}
          >
            <Card
              color="info"
              style={{
                borderRadius: "30px",
                border: "0px",
                height: "4rem",
                width: "55%",
                marginTop: "-30px",
                color: "whitesmoke",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <b>TEMUKAN TENTOR IDAMAN</b>
            </Card>
            <Form
              style={{
                marginTop: "2.5rem",
                marginBottom: "2rem",
                fontSize: "12px",
                width: "90%"
              }}
            >
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="select">Tentor</Label>
                    <Input
                      type="select"
                      name="select"
                      id="select"
                      style={{ fontSize: "12px" }}
                    >
                      <option>Laki-laki</option>
                      <option>Perempuan</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="select">Pendidikan</Label>
                    <Input
                      type="select"
                      name="select"
                      id="select"
                      style={{ fontSize: "12px" }}
                    >
                      <option>SD</option>
                      <option>SMP</option>
                      <option>SMA</option>
                      <option>SMK</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="select">Mapel</Label>
                    <Input
                      type="select"
                      name="select"
                      id="select"
                      style={{ fontSize: "12px" }}
                    >
                      <option>Matematika</option>
                      <option>Biologi</option>
                      <option>Fisika</option>
                      <option>Kimia</option>
                      <option>Bahasa Inggis</option>
                      <option>Bahasa Indonesia</option>
                      <option>PPKN</option>
                      <option>Ekonomi</option>
                      <option>Sejarah</option>
                      <option>Geografi</option>
                      <option>Akutansi</option>
                      <option>Gambar Teknik</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>

              <Button
                color="info"
                outline
                style={{ borderRadius: "10px", float: "right" }}
              >
                Cari
              </Button>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}
