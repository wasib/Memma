import React from "react";
import homeImage from "../../images/homeImage.svg";
import image from "../../images/image.png";
import signature from "../../images/signature.svg";
import client1 from "../../images/home/1.png";
import client2 from "../../images/home/2.png";
import client3 from "../../images/home/3.png";
import client4 from "../../images/home/5.png";
import client5 from "../../images/home/6.png";
import client6 from "../../images/home/7.png";
import client7 from "../../images/home/8.png";
import { Header, Embed, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import ContactForm from "./ContactForm";
import "../../styles/Home.css";

export class HomeAr extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="home">
        <div className="home-top">
          <div className="home-top-text">
            <div className="home-header">
              <Header as="h2" icon textAlign="center">
                <Header.Content style={{ color: "white" }}>
                  من نحن
                </Header.Content>
                <br />
                <Header.Subheader style={{ color: "white" }}>
                  مصنع الشرق الأوسط الحديث للآلآت والمعدات، تم تأسيسه في عام
                  ٢٠١٦ وهو اول مصنع في المملكة العربية السعودية مختص بتصميم
                  وإنتاج الاجهزة والمعدات الأوتوماتيكية والتي تقلل العماله في
                  شتى المجالات.اهم المنتجات التي يعمل عليها المصنع هي منتجات
                  غسيل السيارات الأوتوماتيكية فائقة السرعة والتي تصل إنتاجيها
                  حتى ٤٠ سيارة في الساعة. ويتميز المصنع محلياً بتوفير الضمانات
                  والصيانات الدورية للاجهزة في كافة أنحاء مناطق المملكة والعالم
                  وبشكل موثوق ومعتمد.  والخاصة بحد سوا
                </Header.Subheader>
                <br />
                {/* <Link to="/ar/Contact">
                  <button className="ui button">التدريب</button>
                </Link> */}
              </Header>
            </div>
          </div>
          <div className="home-image">
            <Image src={homeImage} size="massive" />
          </div>
        </div>

        <div className="about-us">
          <div className="about-text">
            <Header as="h2" icon textAlign="center">
              <Header.Content>الخدمات</Header.Content>
              <br />
              <Header.Subheader>
                توفير الاستشارات في مجال مراكز غسيل السيارات الاتوماتيكية وتشمل
                استشارات دراسة الجدوى، التصاميم، التجهيزات ،التطوير.
              </Header.Subheader>
              <Header.Subheader>
                توفير الاستشارات في مجالات الاتمتة ويشمل ذلك التصاميم والتجهيزات
                والتطوير.
              </Header.Subheader>
            </Header>
            {/* <img src={signature} alt="signature" /> */}
          </div>
        </div>

        <div className="our-work-process">
          {/* <Header as="h2" icon textAlign="center">
            <Header.Content>الاستشارية</Header.Content>
            <br />
            <Header.Subheader>
              الأكاديمية و التخصصية من أرقى الجامعات والمعاهد العالمية، بالإضافة
              إلى تعاونه مع عدد كبير من المعاهد والمراكز البحثية والتدريبية الم
            </Header.Subheader>
            <br />
          </Header> */}
          <video controls>
            <source
              src={require("../../images/home/homepage_video.mp4")}
              type="video/mp4"
            />
          </video>
        </div>

        {/* <div className="carousel">
          <Carousel autoplay>
            <div>
              <h3>
                جميع القطاعات المستفيدة والمستهدفة من خدماته. تأتي هذه المبادرة
                سعياً من المركز لتحقيق أحد أهدافه الإستراتيجية بتوفير كوادر مؤ
              </h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </div> */}

        <div className="clients">
          <img src={client1} alt="client1" />
          <img src={client2} alt="client2" />
          <img src={client3} alt="client3" />
          <img src={client4} alt="client4" />
          <img src={client5} alt="client5" />
          <img src={client6} alt="client6" />
          <img src={client7} alt="client7" />
        </div>

        <div className="need-a-project">
          {/* <Header as="h2" icon textAlign="center">
            <Header.Content>احصائيات</Header.Content>
            <br />
            <Header.Subheader>
              المؤسسات والمنظمات بمختلف مجالات عملها. ويتميز المركز باحتضانه
              لعدد من نخبة الباحثين والاستشاريين
            </Header.Subheader>
          </Header> */}
          <br />
          <ContactForm />
        </div>
      </div>
    );
  }
}
