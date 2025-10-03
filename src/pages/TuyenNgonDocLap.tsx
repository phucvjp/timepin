import React from 'react';
import { motion } from 'framer-motion';
import { ScrollText, Calendar, Flag, BookOpen, Quote, Star } from 'lucide-react';
import '../styles/TuyenNgonDocLap.css';

// Import images
import hcmDocTuyenNgon from '../assets/hcmdoctuyenngondoclap.jpg';
import hcmAndChildren from '../assets/hcmandchildren.jpg';
import hcmVisitFarmer from '../assets/hcmvisitfarmer.jpg';

const TuyenNgonDocLap: React.FC = () => {

  const timelineData = [
    {
      date: "2/9/1945",
      title: "Ngày Độc Lập",
      description: "Chủ tịch Hồ Chí Minh đọc Tuyên Ngôn Độc Lập tại Quảng trường Ba Đình, Hà Nội, khai sinh nước Việt Nam Dân chủ Cộng hòa."
    },
    {
      date: "19/8/1945",
      title: "Cách Mạng Tháng Tám",
      description: "Nhân dân Việt Nam đứng lên giành chính quyền từ tay thực dân Pháp và phát xít Nhật."
    },
    {
      date: "1941-1945",
      title: "Chuẩn Bị Cách Mạng",
      description: "Đảng Cộng sản Việt Nam và Mặt trận Việt Minh chuẩn bị lực lượng cho cuộc cách mạng giải phóng dân tộc."
    },
    {
      date: "1858-1945",
      title: "Thời Kỳ Thuộc Địa",
      description: "87 năm đấu tranh chống thực dân Pháp, từ khi Pháp xâm lược đến khi giành được độc lập."
    }
  ];

  const galleryImages = [
    {
      src: hcmDocTuyenNgon,
      caption: "Chủ tịch Hồ Chí Minh đọc Tuyên Ngôn Độc Lập"
    },
    {
      src: hcmAndChildren, 
      caption: "Bác Hồ với thiếu nhi"
    },
    {
      src: hcmVisitFarmer,
      caption: "Bác Hồ thăm nông dân"
    }
  ];

  return (
    <div className="tuyen-ngon-page">
      {/* Hero Section */}
      <section id="hero-section" className="tuyen-ngon-hero">
        <div className="floating-elements">
          <motion.div 
            className="floating-element"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ScrollText size={60} color="var(--gold)" />
          </motion.div>
          <motion.div 
            className="floating-element"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Flag size={50} color="var(--red)" />
          </motion.div>
          <motion.div 
            className="floating-element"
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 4, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          >
            <BookOpen size={45} color="var(--sepia)" />
          </motion.div>
        </div>

        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            TUYÊN NGÔN ĐỘC LẬP
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Tài liệu lịch sử thiêng liêng của dân tộc Việt Nam
          </motion.p>
          
          <motion.div 
            className="hero-date"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Calendar className="inline-block mr-3" size={40} />
            2 tháng 9, 1945
          </motion.div>
          
          <motion.blockquote 
            className="hero-quote"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Quote className="inline-block mr-2" size={24} />
            "Tất cả mọi người đều sinh ra có quyền bình đẳng. Tạo hóa cho họ những quyền không ai có thể xâm phạm được; 
            trong những quyền ấy, có quyền được sống, quyền tự do và quyền mưu cầu hạnh phúc."
            <Quote className="inline-block ml-2" size={24} />
          </motion.blockquote>
        </div>
      </section>

      {/* Content Section */}
      <section id="summary-section" className="content-section">
        <motion.h2 
          className="content-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Văn Bản Tuyên Ngôn Độc Lập
        </motion.h2>

        <motion.div 
          className="document-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="document-title">TUYÊN NGÔN ĐỘC LẬP</h3>
          <div className="document-content">
            <p>
              "Tất cả mọi người đều sinh ra có quyền bình đẳng. Tạo hóa cho họ những quyền không ai có thể xâm phạm được; 
              trong những quyền ấy, có quyền được sống, quyền tự do và quyền mưu cầu hạnh phúc."
            </p>
            <p>
              Lời bất hủ ấy trong bản Tuyên ngôn Độc lập năm 1776 của nước Mỹ. Suy rộng ra, câu ấy có ý nghĩa là: 
              tất cả các dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do.
            </p>
            <p>
              Bản Tuyên ngôn Nhân quyền và Dân quyền của Cách mạng Pháp năm 1791 cũng nói: 
              "Người ta sinh ra tự do và bình đẳng về quyền lợi; và phải luôn luôn được tự do và bình đẳng về quyền lợi."
            </p>
            <p>
              Đó là những lẽ phải không ai chối cãi được. Thế mà hơn 80 năm nay, bọn thực dân Pháp lợi dụng lá cờ tự do, 
              bình đẳng, bác ái, đến cướp đất nước ta, áp bức đồng bào ta. Hành động của chúng trái hẳn với nhân đạo và chính nghĩa.
            </p>
            <p>
              Về chính trị, chúng tuyệt đối không cho nhân dân ta một chút tự do dân chủ nào. Chúng thi hành những luật pháp dã man. 
              Chúng lập ba chế độ khác nhau ở Trung, Nam, Bắc để ngăn cản việc thống nhất nước nhà của ta, để ngăn cản dân tộc ta đoàn kết.
            </p>
            <p>
              Chúng lập ra nhà tù nhiều hơn trường học. Chúng thẳng tay chém giết những người yêu nước thương nòi của ta. 
              Chúng tắm các cuộc khởi nghĩa của ta trong những bể máu.
            </p>
            <p>
              Chúng ràng buộc dư luận, thi hành chính sách ngu dân. Chúng dùng thuốc phiện, rượu cồn để làm cho nòi giống ta suy nhược.
            </p>
            <p>
              Về kinh tế, chúng bóc lột dân ta đến tận xương tủy, khiến cho dân ta nghèo nàn, thiếu thốn, nước ta xơ xác, tiêu điều. 
              Chúng cướp không ruộng đất, hầm mỏ, nguyên liệu. Chúng giữ độc quyền in giấy bạc, xuất cảng và nhập cảng.
            </p>
            <p>
              Chúng đặt ra hàng trăm thứ thuế vô lý, làm cho dân ta, nhất là dân cày và dân buôn, trở nên bần cùng. 
              Chúng không cho các nhà tư sản ta ngóc đầu lên được. Chúng bóc lột công nhân ta một cách vô cùng tàn nhẫn.
            </p>
            <p>
              Mùa thu năm 1940, phát xít Nhật đến xâm lăng Đông Dương để mở thêm căn cứ đánh Đồng minh, thì bọn thực dân Pháp quỳ gối đầu hàng, 
              mở cửa nước ta rước Nhật. Từ đó, dân ta chịu hai tầng xiềng xích: Pháp và Nhật. Từ đó, dân ta càng cực khổ, nghèo nàn. 
              Kết quả là cuối năm ngoái sang đầu năm nay, từ Quảng Trị đến Bắc Kỳ, hơn 2 triệu đồng bào ta bị chết đói.
            </p>
            <p>
              Ngày 9 tháng 3 năm nay, Nhật tước khí giới của quân đội Pháp. Bọn thực dân Pháp hoặc là bỏ chạy, hoặc là đầu hàng. 
              Thế là chẳng những chúng không "bảo hộ" được ta, trái lại, trong 5 năm, chúng đã bán nước ta hai lần cho Nhật.
            </p>
            <p>
              Trước ngày 9 tháng 3, biết bao lần Việt Minh đã kêu gọi người Pháp liên minh để chống Nhật. Bọn thực dân Pháp đã không đáp ứng, 
              lại thẳng tay khủng bố Việt Minh hơn nữa. Thậm chí đến khi thua chạy, chúng còn nhẫn tâm giết nốt số đông tù chính trị ở Yên Bái và Cao Bằng.
            </p>
            <p>
              Tuy vậy, đối với nước Pháp, đồng bào ta vẫn giữ một thái độ khoan hồng và nhân đạo. Sau cuộc biến động ngày 9 tháng 3, 
              Việt Minh đã giúp cho nhiều người Pháp chạy qua biên thùy, lại cứu cho nhiều người Pháp ra khỏi nhà giam Nhật và bảo vệ tính mạng và tài sản cho họ.
            </p>
            <p>
              Sự thật là từ mùa thu năm 1940, nước ta đã thành thuộc địa của Nhật, chứ không phải thuộc địa của Pháp nữa. 
              Khi Nhật hàng Đồng minh thì nhân dân cả nước ta đã nổi dậy giành chính quyền, lập nên nước Việt Nam Dân chủ Cộng hòa.
            </p>
            <p>
              Sự thật là dân ta đã lấy lại nước Việt Nam từ tay Nhật, chứ không phải từ tay Pháp. Pháp chạy, Nhật hàng, vua Bảo Đại thoái vị. 
              Dân ta đã đánh đổ các xiềng xích thực dân gần 100 năm nay để gây dựng nên nước Việt Nam độc lập. Dân ta lại đánh đổ chế độ quân chủ mấy mươi thế kỷ mà lập nên chế độ Dân chủ Cộng hòa.
            </p>
            <p>
              Do đó, chúng tôi, lâm thời Chính phủ của nước Việt Nam mới, đại biểu cho toàn dân Việt Nam, tuyên bố thoát ly hẳn quan hệ thực dân với Pháp, 
              xóa bỏ hết những hiệp ước mà Pháp đã ký về nước Việt Nam, xóa bỏ tất cả mọi đặc quyền của Pháp trên đất nước Việt Nam.
            </p>
            <p>
              Toàn dân Việt Nam, trên dưới một lòng kiên quyết chống lại âm mưu của bọn thực dân Pháp.
            </p>
            <p>
              Chúng tôi tin rằng các nước Đồng minh đã công nhận những nguyên tắc dân tộc bình đẳng ở các Hội nghị Têhêran và Cựu Kim Sơn, 
              quyết không thể không công nhận quyền độc lập của dân Việt Nam.
            </p>
            <p>
              Một dân tộc đã gan góc chống ách nô lệ của Pháp hơn 80 năm nay, một dân tộc đã gan góc đứng về phe Đồng minh chống phát xít mấy năm nay, 
              dân tộc đó phải được tự do! Dân tộc đó phải được độc lập!
            </p>
            <p>
              Vì những lẽ trên, chúng tôi, Chính phủ lâm thời của nước Việt Nam Dân chủ Cộng hòa, trịnh trọng tuyên bố với thế giới rằng:
            </p>
            <p>
              <strong>Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do, độc lập. 
              Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy.</strong>
            </p>
          </div>
          <div className="document-signature">
            <p>Hà Nội, ngày 2 tháng 9 năm 1945</p>
            <p><strong>Chủ tịch Chính phủ lâm thời</strong></p>
            <p><strong>Hồ Chí Minh</strong></p>
          </div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section id="media-section" className="timeline">
        <motion.h2 
          className="content-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Hành Trình Lịch Sử
        </motion.h2>
        
        <div className="timeline">
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="education-section" className="gallery">
        <motion.h2 
          className="content-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Hình Ảnh Lịch Sử
        </motion.h2>
        
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={image.src} alt={image.caption} />
              <div className="gallery-caption">
                {image.caption}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Quote */}
      <motion.section 
        className="content-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="document-container" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #f8f4f0, #f0ebe2)' }}>
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Star className="inline-block mr-3 mb-4" size={40} color="var(--gold)" />
          </motion.div>
          <h3 style={{ color: 'var(--red)', fontSize: '1.8rem', marginBottom: '1rem' }}>
            "Không có gì quý hơn độc lập, tự do!"
          </h3>
          <p style={{ fontSize: '1.2rem', color: 'var(--sepia)', fontStyle: 'italic' }}>
            - Chủ tịch Hồ Chí Minh -
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default TuyenNgonDocLap;
