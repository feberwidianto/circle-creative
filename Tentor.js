import React, { Component } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody
} from "reactstrap";
import CariTentor from "./CariTentor";

export default class Tentor extends Component {
  render() {
    return (
      <div>
        <CariTentor />
        <CardColumns
          style={{ marginTop: "10rem", width: "80%", marginLeft: "10rem" }}
        >
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffd369", borderColor: "#ffd369" }}
          >
            <CardBody>
              <CardTitle>
                <h4>Mulan Jameela</h4>
              </CardTitle>
              <CardSubtitle>Tentor Sejarah</CardSubtitle>
              <CardText>
                Mulan Jameela menjadi seorang tutor sejak tiga tahun silam,
                merupakan guru populer di bidang Sejarah.
              </CardText>
              <Button
                color="info"
                style={{
                  borderRadius: "10px"
                }}
              >
                Pilih
              </Button>{" "}
              <Button
                outline
                color="info"
                style={{
                  borderRadius: "10px"
                }}
              >
                Lihat Profil
              </Button>
            </CardBody>
          </Card>
          <Card
            body
            inverse
            style={{ backgroundColor: "#550a46", borderColor: "#550a46" }}
          >
            <CardBody>
              <CardTitle>
                <h4>Arif Muhammad</h4>
              </CardTitle>
              <CardSubtitle>Tentor Kimia</CardSubtitle>
              <CardText>
                Arif Muhammad menjadi seorang tutor sejak tiga tahun silam,
                merupakan guru populer di bidang Kimia.
              </CardText>
              <Button
                color="info"
                style={{
                  borderRadius: "10px"
                }}
              >
                Pilih
              </Button>{" "}
              <Button
                outline
                color="info"
                style={{
                  borderRadius: "10px"
                }}
              >
                Lihat Profil
              </Button>
            </CardBody>
          </Card>
          <Card
            body
            inverse
            style={{ backgroundColor: "#f67280", borderColor: "#f67280" }}
          >
            <CardBody>
              <CardTitle>
                <h4>Baim Wong</h4>
              </CardTitle>
              <CardSubtitle>Tentor Biologi</CardSubtitle>
              <CardText>
                Baim Wong menjadi seorang tutor sejak tiga tahun silam,
                merupakan guru populer di bidang Biologi.
              </CardText>
              <Button
                color="info"
                style={{
                  borderRadius: "10px"
                }}
              >
                Pilih
              </Button>{" "}
              <Button
                outline
                color="info"
                style={{
                  borderRadius: "10px"
                }}
              >
                Lihat Profil
              </Button>
            </CardBody>
          </Card>
          <Card
            body
            inverse
            style={{ backgroundColor: "#2c786c", borderColor: "#2c786c" }}
          >
            <CardTitle>
              <h4>Anwar Zahid</h4>
            </CardTitle>
            <CardSubtitle>Tentor Fisika</CardSubtitle>
            <CardText>
              Anwar Zahid menjadi seorang tutor sejak tiga tahun silam,
              merupakan guru populer di bidang Fisika.
            </CardText>
            <Button
              color="info"
              style={{
                borderRadius: "10px"
              }}
            >
              Pilih
            </Button>{" "}
            <Button
              outline
              color="info"
              style={{
                borderRadius: "10px"
              }}
            >
              Lihat Profil
            </Button>
          </Card>
          <Card
            body
            inverse
            style={{ backgroundColor: "#fe9801", borderColor: "#fe9801" }}
          >
            <CardBody>
              <CardTitle>
                <h4>Budiman Zulkifli</h4>
              </CardTitle>
              <CardSubtitle>Tentor Bahasa Inggris</CardSubtitle>
              <CardText>
                Budiman Zulkifli menjadi seorang tutor sejak tiga tahun silam,
                merupakan guru populer di bidang Bahasa Inggris.
              </CardText>
              <Button
                color="info"
                style={{
                  borderRadius: "10px"
                }}
              >
                Pilih
              </Button>{" "}
              <Button
                outline
                color="info"
                style={{
                  borderRadius: "10px"
                }}
              >
                Lihat Profil
              </Button>
            </CardBody>
          </Card>
          <Card
            body
            inverse
            style={{ backgroundColor: "#f0cf85", borderColor: "#f0cf85" }}
          >
            <CardTitle>
              <h4>Yeni Mertia</h4>
            </CardTitle>
            <CardSubtitle>Tentor Matematika</CardSubtitle>
            <CardText>
              Yeni Mertia menjadi seorang tutor sejak tiga tahun silam,
              merupakan guru populer di bidang Matematika.
            </CardText>
            <Button
              color="info"
              style={{
                borderRadius: "10px"
              }}
            >
              Pilih
            </Button>{" "}
            <Button
              outline
              color="info"
              style={{
                borderRadius: "10px"
              }}
            >
              Lihat Profil
            </Button>
          </Card>
        </CardColumns>
        <Button
          color="info"
          outline
          style={{
            marginTop: "5rem",
            marginBottom: "5rem",
            marginLeft: "45rem",
            borderRadius: "10px"
          }}
        >
          Lihat tentor lainnya
        </Button>
      </div>
    );
  }
}
