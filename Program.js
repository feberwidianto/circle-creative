import React, { Component } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";

export default class Program extends Component {
  render() {
    return (
      <div
        className="program-pages"
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
        <CardDeck style={{ width: "100%", marginBottom: "5rem" }}>
          <Card
            color="warning"
            style={{
              borderRadius: "5%",
              marginTop: "30rem",
              marginLeft: "10rem"
            }}
          >
            <CardBody>
              <CardTitle>
                <h4>Program Akademis</h4>
              </CardTitle>
              <CardSubtitle style={{marginTop:"3rem"}}>Les Mapel</CardSubtitle>
              <CardText>
                Paket-paket les tersedia untuk murid-murid kelas 6 hingga 12
                yang mengambil program international di sekolah. Sesi-sesi group
                kecil tersedia untuk mata pelajaran Matematika, Kimia, Fisika,
                Biology dan IPA untuk semua level. Murid-Murid diharapkan
                mengikuti setidaknya 2 sesi per mata pelajaran per minggu.
              </CardText>
              <Button color="info" style={{ borderRadius: "20px" }}>
                Daftar
              </Button>
            </CardBody>
          </Card>
          <Card style={{ borderRadius: "5%", marginTop: "30rem" }}>
            <CardBody>
              <CardTitle>
                <h4>Program Ujian</h4>
              </CardTitle>
              <CardSubtitle style={{marginTop:"3rem"}}>Persiapan Ujian</CardSubtitle>
              <CardText>
                Untuk murid-murid di kelas yang lebih tinggi (kelas 10 hingga
                12), kami menyediakan “Program Persiapan Ujian” untuk
                ujian-ujian IGCSE, AS/A-Levels, dan IBDP. Kami juga menyediakan
                paket liburan panjang untuk “Bersiap-siap” terhadap kelasmu yang
                akan datang di sekolah. Untuk murid-murid yang akan menaiki
                jenjang pendidikan universitas kamu menyediakan program SAT
                (Subject SAT) dan paket persiapan UN.
              </CardText>
              <Button color="info" style={{ borderRadius: "20px" }}>
                Daftar
              </Button>
            </CardBody>
          </Card>
          <Card
            style={{
              borderRadius: "5%",
              marginTop: "30rem",
              marginRight: "9rem"
            }}
          >
            <CardBody>
              <CardTitle>
                <h4>Program Online</h4>
              </CardTitle>
              <CardSubtitle style={{marginTop:"3rem"}}>Les Online</CardSubtitle>
              <CardText>
                Dapatkan kenyamanan les online one-on-one di saat saat kamu
                sukai- bisa kapan saja, dimana saja, dan pada gajet apa saja.
                Rasakan dukungan online les Pinnacle berkualitas tinggi yang
                sama untuk Matematik kurikulum IB dan CIE. Kamu juga dapat
                mendiskusikan PR dan proyek sekolah kamu dan dapatkan umpan
                balikdari guru les online kamu.
              </CardText>
              <Button color="info" style={{ borderRadius: "20px" }}>
                Daftar
              </Button>
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    );
  }
}
