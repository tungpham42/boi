const heavenlyStems = [
  "Giáp",
  "Ất",
  "Bính",
  "Đinh",
  "Mậu",
  "Kỷ",
  "Canh",
  "Tân",
  "Nhâm",
  "Quý",
];
const earthlyBranches = [
  "Tý",
  "Sửu",
  "Dần",
  "Mão",
  "Thìn",
  "Tỵ",
  "Ngọ",
  "Mùi",
  "Thân",
  "Dậu",
  "Tuất",
  "Hợi",
];

const napAm = [
  "Hải Trung Kim",
  "Lô Trung Hỏa",
  "Đại Lâm Mộc",
  "Lộ Bàng Thổ",
  "Kiếm Phong Kim",
  "Sơn Đầu Hỏa",
  "Giản Hạ Thủy",
  "Thành Đầu Thổ",
  "Bạch Lạp Kim",
  "Dương Liễu Mộc",
  "Tuyền Trung Thủy",
  "Ốc Thượng Thổ",
  "Tích Lịch Hỏa",
  "Tùng Bách Mộc",
  "Trường Lưu Thủy",
  "Sa Trung Kim",
  "Sơn Hạ Hỏa",
  "Bình Địa Mộc",
  "Bích Thượng Thổ",
  "Kim Bạch Kim",
  "Phúc Đăng Hỏa",
  "Thiên Hà Thủy",
  "Đại Trạch Thổ",
  "Thoa Xuyến Kim",
  "Tang Đố Mộc",
  "Đại Khê Thủy",
  "Sa Trung Thổ",
  "Thiên Thượng Hỏa",
  "Thạch Lựu Mộc",
  "Đại Hải Thủy",
];

const napAmElements = [
  "Kim",
  "Hỏa",
  "Mộc",
  "Thổ",
  "Kim",
  "Hỏa",
  "Thủy",
  "Thổ",
  "Kim",
  "Mộc",
  "Thủy",
  "Thổ",
  "Hỏa",
  "Mộc",
  "Thủy",
  "Kim",
  "Hỏa",
  "Mộc",
  "Thổ",
  "Kim",
  "Hỏa",
  "Thủy",
  "Thổ",
  "Kim",
  "Mộc",
  "Thủy",
  "Thổ",
  "Hỏa",
  "Mộc",
  "Thủy",
];

const napAmDescriptions = {
  "Hải Trung Kim":
    "Vàng trong biển, biểu tượng của sự quý hiếm và tiềm năng ẩn sâu. Người mang mệnh này thường có nội lực mạnh mẽ, tư duy sâu sắc, nhưng giá trị của họ chỉ được phát huy khi gặp đúng cơ hội hoặc được 'khai quật' bởi những người hiểu rõ tiềm năng của họ. Họ thường trầm lắng, kín đáo, nhưng một khi tỏa sáng thì ánh sáng ấy bền vững và lan tỏa. Điểm yếu là đôi khi họ dễ bị môi trường xung quanh che lấp, cần học cách tự tin thể hiện bản thân. Phù hợp với các lĩnh vực yêu cầu sự kiên nhẫn, khám phá như nghiên cứu, nghệ thuật hoặc kinh doanh sáng tạo.",

  "Lô Trung Hỏa":
    "Lửa trong lò, biểu trưng cho sự ấm áp, ổn định và bền bỉ. Người mệnh này thường mang lại cảm giác an toàn, đáng tin cậy cho người xung quanh, với tính cách ôn hòa và khả năng duy trì các mối quan hệ lâu dài. Họ thích hợp với những công việc đòi hỏi sự kiên định như giáo dục, quản lý, hoặc chăm sóc cộng đồng. Tuy nhiên, họ có thể thiếu sự bứt phá hoặc mạo hiểm, đôi khi trở nên quá bảo thủ. Để phát triển, họ cần học cách thỉnh thoảng bước ra khỏi vùng an toàn để đón nhận những thử thách mới.",

  "Đại Lâm Mộc":
    "Cây rừng lớn, tượng trưng cho sự mạnh mẽ, kiên định và phát triển rộng lớn. Người mệnh Đại Lâm Mộc thường có tầm nhìn xa, tham vọng lớn và khả năng lãnh đạo tự nhiên. Họ thích hợp với các vai trò tổ chức, xây dựng đội nhóm hoặc phát triển các dự án dài hạn. Tuy nhiên, họ có thể cứng nhắc trong suy nghĩ hoặc quá tập trung vào mục tiêu mà bỏ qua cảm xúc của người khác. Để cân bằng, họ nên rèn luyện sự linh hoạt và lắng nghe ý kiến từ xung quanh, đồng thời chú ý chăm sóc sức khỏe tinh thần.",

  "Lộ Bàng Thổ":
    "Đất ven đường, biểu tượng của sự kiên trì, thực tế và gắn bó với đời sống thường nhật. Người mệnh này thường chăm chỉ, đáng tin cậy, và có khả năng thích nghi với mọi hoàn cảnh. Họ phù hợp với các công việc đòi hỏi sự bền bỉ như nông nghiệp, xây dựng, hoặc dịch vụ cộng đồng. Tuy nhiên, họ dễ bị ảnh hưởng bởi môi trường xung quanh, đôi khi thiếu quyết đoán hoặc bị cuốn vào những thay đổi không mong muốn. Để phát triển, họ cần xây dựng sự tự tin và học cách đặt ra ranh giới rõ ràng.",

  "Kiếm Phong Kim":
    "Vàng mũi kiếm, biểu trưng cho sự sắc bén, quyết đoán và tinh thần mạnh mẽ. Người mệnh này thường có ý chí thép, khả năng đưa ra quyết định nhanh chóng và không ngại đối mặt với thử thách. Họ phù hợp với các lĩnh vực đòi hỏi sự dứt khoát như kinh doanh, quân sự, hoặc pháp luật. Tuy nhiên, sự sắc bén này đôi khi khiến họ trở nên cứng nhắc hoặc dễ gây xung đột. Họ cần rèn luyện sự kiên nhẫn và khả năng thấu hiểu để cân bằng giữa lý trí và tình cảm.",

  "Sơn Đầu Hỏa":
    "Lửa trên núi, biểu tượng của sự rực rỡ, nhiệt huyết nhưng dễ bùng nổ và tắt nhanh. Người mệnh này thường tràn đầy năng lượng, sáng tạo và dễ gây ấn tượng mạnh mẽ. Họ phù hợp với các ngành nghề nghệ thuật, truyền thông, hoặc những công việc cần sự bứt phá. Tuy nhiên, họ dễ bị cảm xúc chi phối, dẫn đến thiếu ổn định. Để thành công, họ cần học cách kiểm soát cảm xúc, lập kế hoạch dài hạn và duy trì sự kiên trì trong những giai đoạn khó khăn.",

  "Giản Hạ Thủy":
    "Nước dưới khe, biểu trưng cho sự nhẹ nhàng, linh hoạt và khả năng thích nghi tuyệt vời. Người mệnh này thường thông minh, nhạy bén, và có khả năng hòa nhập với mọi môi trường. Họ phù hợp với các công việc sáng tạo, ngoại giao, hoặc tư vấn. Tuy nhiên, họ có thể thiếu sự kiên định hoặc dễ bị cuốn theo dòng chảy của người khác. Để phát triển, họ cần rèn luyện sự tự chủ và xác định rõ mục tiêu cá nhân để không bị lạc hướng.",

  "Thành Đầu Thổ":
    "Đất trên thành, biểu tượng của sự vững chắc, bảo vệ và tinh thần trách nhiệm cao. Người mệnh này thường đáng tin cậy, có khả năng lãnh đạo và sẵn sàng che chở cho người khác. Họ phù hợp với các vai trò quản lý, chính trị, hoặc bảo vệ cộng đồng. Tuy nhiên, họ có thể trở nên bảo thủ hoặc quá nghiêm khắc với bản thân và người khác. Để cân bằng, họ nên học cách linh hoạt hơn và dành thời gian chăm sóc đời sống cá nhân.",

  "Bạch Lạp Kim":
    "Vàng sáp trắng, biểu trưng cho sự tinh tế, mềm dẻo nhưng cần tôi luyện để trở nên mạnh mẽ. Người mệnh này thường thông minh, nhạy cảm và có gu thẩm mỹ cao, phù hợp với các ngành nghệ thuật, thiết kế, hoặc thời trang. Tuy nhiên, họ có thể thiếu sự quyết đoán hoặc dễ bị tổn thương bởi lời phê bình. Để phát triển, họ cần rèn luyện sự tự tin, kiên nhẫn và khả năng đối mặt với áp lực để tỏa sáng như vàng ròng.",

  "Dương Liễu Mộc":
    "Cây dương liễu, biểu tượng của sự mềm mại, uyển chuyển nhưng dễ bị tác động bởi ngoại cảnh. Người mệnh này thường dịu dàng, giàu cảm xúc và có khả năng đồng cảm cao. Họ phù hợp với các công việc liên quan đến chăm sóc, giáo dục, hoặc nghệ thuật. Tuy nhiên, họ có thể thiếu sự kiên định hoặc dễ bị ảnh hưởng bởi ý kiến người khác. Để phát triển, họ cần xây dựng sự mạnh mẽ bên trong và học cách bảo vệ cảm xúc của mình.",

  "Tuyền Trung Thủy":
    "Nước trong suối, biểu trưng cho sự thanh khiết, thông minh và tinh thần tự do. Người mệnh này thường có tư duy sắc sảo, sáng tạo và khả năng giao tiếp tốt. Họ phù hợp với các ngành nghề như viết lách, truyền thông, hoặc nghiên cứu. Tuy nhiên, họ có thể thiếu kiên nhẫn hoặc dễ bị phân tâm bởi quá nhiều ý tưởng. Để thành công, họ cần học cách tập trung và theo đuổi mục tiêu đến cùng.",

  "Ốc Thượng Thổ":
    "Đất trên mái nhà, biểu tượng của sự kiên cố nhưng đôi khi cô lập. Người mệnh này thường độc lập, kiên định và có ý chí mạnh mẽ. Họ phù hợp với các công việc đòi hỏi sự tập trung cao như nghiên cứu, kỹ thuật, hoặc quản lý tài chính. Tuy nhiên, họ có thể trở nên khép kín hoặc khó hòa nhập với cộng đồng. Để phát triển, họ cần mở lòng hơn và xây dựng các mối quan hệ hỗ trợ.",

  "Tích Lịch Hỏa":
    "Lửa sấm sét, biểu trưng cho sự mạnh mẽ, đột phá và năng lượng bùng nổ. Người mệnh này thường có tinh thần tiên phong, dám nghĩ dám làm và dễ truyền cảm hứng cho người khác. Họ phù hợp với các lĩnh vực đổi mới như công nghệ, khởi nghiệp, hoặc thể thao. Tuy nhiên, sự bộc trực của họ có thể gây xung đột. Để cân bằng, họ cần rèn luyện sự kiên nhẫn và khả năng lắng nghe.",

  "Tùng Bách Mộc":
    "Cây tùng bách, biểu tượng của sự cứng cáp, trường tồn và ý chí bất khuất. Người mệnh này thường kiên cường, đáng tin cậy và có tinh thần trách nhiệm cao. Họ phù hợp với các vai trò lãnh đạo, giáo dục, hoặc các công việc đòi hỏi sự bền bỉ. Tuy nhiên, họ có thể quá nghiêm khắc hoặc thiếu linh hoạt. Để phát triển, họ nên học cách thả lỏng và chấp nhận sự thay đổi.",

  "Trường Lưu Thủy":
    "Nước sông dài, biểu trưng cho sự trôi chảy, kiên nhẫn và khả năng thích nghi. Người mệnh này thường thông minh, linh hoạt và có khả năng vượt qua khó khăn một cách nhẹ nhàng. Họ phù hợp với các công việc liên quan đến giao tiếp, thương mại, hoặc ngoại giao. Tuy nhiên, họ có thể thiếu sự quyết đoán hoặc dễ bị cuốn theo dòng chảy. Để thành công, họ cần xác định mục tiêu rõ ràng và rèn luyện sự kiên định.",

  "Sa Trung Kim":
    "Vàng trong cát, biểu tượng của giá trị tiềm ẩn cần được khai phá. Người mệnh này thường khiêm tốn, sâu sắc và có tiềm năng lớn, nhưng cần thời gian và cơ hội để tỏa sáng. Họ phù hợp với các công việc nghiên cứu, nghệ thuật, hoặc đầu tư dài hạn. Tuy nhiên, họ có thể thiếu tự tin hoặc dễ bị bỏ qua. Để phát triển, họ cần học cách thể hiện bản thân và tận dụng các cơ hội xung quanh.",

  "Sơn Hạ Hỏa":
    "Lửa dưới núi, biểu trưng cho sự âm ỉ, bền bỉ và khả năng phát triển từ từ. Người mệnh này thường kiên nhẫn, sâu sắc và có khả năng xây dựng nền tảng vững chắc. Họ phù hợp với các công việc đòi hỏi sự tỉ mỉ như kế hoạch, quản lý, hoặc giáo dục. Tuy nhiên, họ có thể thiếu sự bứt phá hoặc ngại thay đổi. Để thành công, họ cần học cách đón nhận rủi ro và thử sức ở những lĩnh vực mới.",

  "Bình Địa Mộc":
    "Cây trên đồng bằng, biểu tượng của sự bình dị, dễ gần và khả năng thích nghi tốt. Người mệnh này thường hòa đồng, thân thiện và có khả năng gắn kết cộng đồng. Họ phù hợp với các công việc xã hội, dịch vụ, hoặc giáo dục. Tuy nhiên, họ có thể thiếu tham vọng hoặc dễ hài lòng với hiện tại. Để phát triển, họ cần đặt ra mục tiêu lớn hơn và rèn luyện sự kiên trì.",

  "Bích Thượng Thổ":
    "Đất trên vách, biểu trưng cho sự kiên cường, độc lập và ý chí mạnh mẽ. Người mệnh này thường tự lập, có nguyên tắc rõ ràng và khả năng vượt qua khó khăn. Họ phù hợp với các công việc đòi hỏi sự tập trung như kỹ thuật, nghiên cứu, hoặc quản lý. Tuy nhiên, họ có thể cứng nhắc hoặc khó hòa nhập. Để cân bằng, họ cần học cách linh hoạt và xây dựng các mối quan hệ xã hội.",

  "Kim Bạch Kim":
    "Vàng trắng tinh khiết, biểu tượng của sự cao quý, mạnh mẽ và hướng tới sự hoàn hảo. Người mệnh này thường thông minh, quyết đoán và có gu thẩm mỹ cao. Họ phù hợp với các ngành nghề như tài chính, thiết kế, hoặc quản lý cấp cao. Tuy nhiên, họ có thể quá cầu toàn hoặc xa cách với người khác. Để phát triển, họ cần rèn luyện sự đồng cảm và chấp nhận những điều không hoàn hảo.",

  "Phúc Đăng Hỏa":
    "Lửa đèn rực sáng, biểu trưng cho sự ấm áp, may mắn và khả năng truyền cảm hứng. Người mệnh này thường lạc quan, sáng tạo và dễ mang lại niềm vui cho người xung quanh. Họ phù hợp với các công việc nghệ thuật, truyền thông, hoặc từ thiện. Tuy nhiên, họ có thể thiếu thực tế hoặc dễ bị phân tâm. Để thành công, họ cần học cách lập kế hoạch và duy trì sự tập trung.",

  "Thiên Hà Thủy":
    "Nước trên trời, biểu tượng của sự bao la, sáng tạo và tư duy không giới hạn. Người mệnh này thường có tầm nhìn rộng, trí tưởng tượng phong phú và khả năng đổi mới. Họ phù hợp với các ngành công nghệ, nghệ thuật, hoặc chiến lược. Tuy nhiên, họ có thể thiếu thực tế hoặc khó tập trung vào chi tiết. Để phát triển, họ cần rèn luyện sự kiên nhẫn và khả năng biến ý tưởng thành hiện thực.",

  "Đại Trạch Thổ":
    "Đất đầm lớn, biểu trưng cho sự rộng rãi, bao dung và khả năng kết nối. Người mệnh này thường hòa nhã, có khả năng lãnh đạo và gắn kết mọi người. Họ phù hợp với các vai trò quản lý, cộng đồng, hoặc từ thiện. Tuy nhiên, họ có thể quá dễ dãi hoặc thiếu quyết đoán. Để cân bằng, họ cần học cách đặt ra ranh giới và bảo vệ lợi ích cá nhân.",

  "Thoa Xuyến Kim":
    "Vàng trang sức, biểu tượng của sự tinh xảo, quý giá và cần được nâng niu. Người mệnh này thường nhạy bén, tinh tế và có gu thẩm mỹ cao. Họ phù hợp với các ngành thời trang, nghệ thuật, hoặc kinh doanh xa xỉ. Tuy nhiên, họ có thể dễ bị tổn thương hoặc phụ thuộc vào sự công nhận. Để phát triển, họ cần rèn luyện sự tự tin và khả năng độc lập.",

  "Tang Đố Mộc":
    "Cây dâu tằm, biểu trưng cho sự thực dụng, kiên nhẫn và mang lại lợi ích lâu dài. Người mệnh này thường chăm chỉ, đáng tin cậy và có khả năng xây dựng nền tảng vững chắc. Họ phù hợp với các công việc nông nghiệp, giáo dục, hoặc quản lý tài chính. Tuy nhiên, họ có thể thiếu sáng tạo hoặc ngại thay đổi. Để thành công, họ cần học cách đón nhận những ý tưởng mới.",

  "Đại Khê Thủy":
    "Nước khe lớn, biểu trưng cho sự mạnh mẽ, linh hoạt và khả năng vượt qua thử thách. Người mệnh này thường thông minh, năng động và có khả năng thích nghi cao. Họ phù hợp với các ngành thương mại, du lịch, hoặc truyền thông. Tuy nhiên, họ có thể thiếu kiên nhẫn hoặc dễ bị cuốn theo cảm xúc. Để phát triển, họ cần rèn luyện sự tập trung và lập kế hoạch dài hạn.",

  "Sa Trung Thổ":
    "Đất trong cát, biểu trưng cho sự kiên định, bền bỉ nhưng cần cơ hội để nổi bật. Người mệnh này thường khiêm tốn, chăm chỉ và có tiềm năng lớn. Họ phù hợp với các công việc đòi hỏi sự tỉ mỉ như kỹ thuật, nghiên cứu, hoặc quản lý. Tuy nhiên, họ có thể thiếu tự tin hoặc dễ bị bỏ qua. Để phát triển, họ cần học cách thể hiện bản thân và tận dụng cơ hội.",

  "Thiên Thượng Hỏa":
    "Lửa trên trời, biểu trưng cho sự rực rỡ, nhiệt huyết và khả năng gây ấn tượng mạnh. Người mệnh này thường sáng tạo, tự tin và có khả năng truyền cảm hứng. Họ phù hợp với các ngành nghệ thuật, truyền thông, hoặc lãnh đạo. Tuy nhiên, họ có thể thiếu kiên nhẫn hoặc dễ bị cảm xúc chi phối. Để thành công, họ cần rèn luyện sự ổn định và khả năng lắng nghe.",

  "Thạch Lựu Mộc":
    "Cây thạch lựu, biểu trưng cho sự cứng cáp, sinh sôi và phát triển bền vững. Người mệnh này thường kiên trì, sáng tạo và có khả năng xây dựng giá trị lâu dài. Họ phù hợp với các công việc nghệ thuật, nông nghiệp, hoặc giáo dục. Tuy nhiên, họ có thể thiếu linh hoạt hoặc quá tập trung vào chi tiết. Để phát triển, họ cần học cách đón nhận sự thay đổi và mở rộng tầm nhìn.",

  "Đại Hải Thủy":
    "Nước biển lớn, biểu trưng cho sự sâu thẳm, bao la và tinh thần tự do. Người mệnh này thường có tư duy rộng lớn, sáng tạo và khả năng khám phá không ngừng. Họ phù hợp với các ngành du lịch, nghiên cứu, hoặc nghệ thuật. Tuy nhiên, họ có thể thiếu thực tế hoặc khó tập trung vào mục tiêu cụ thể. Để thành công, họ cần rèn luyện sự kiên định và khả năng biến ý tưởng thành hiện thực.",
};

const generateLucThapHoaGiapData = () => {
  const data = {};
  for (let year = 1900; year <= 2100; year++) {
    const cycleIndex = (year - 1864) % 60;
    const stemIndex = cycleIndex % 10;
    const branchIndex = cycleIndex % 12;
    const napAmIndex = Math.floor(cycleIndex / 2);
    const element = napAmElements[napAmIndex];
    data[year] = {
      canChi: `${heavenlyStems[stemIndex]} ${earthlyBranches[branchIndex]}`,
      napAm: napAm[napAmIndex],
      menh: element,
      moTa: napAmDescriptions[napAm[napAmIndex]],
    };
  }
  return data;
};

export const lucThapHoaGiapData = generateLucThapHoaGiapData();
