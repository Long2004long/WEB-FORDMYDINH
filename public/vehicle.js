var vehiclePages=['territory.html','everest.html','explorer.html','ranger.html','raptor.html','transit.html','mustang-mach-e.html'];
var vehicleData={
  'territory.html':{
    name:'Ford Territory',kind:'SUV 5 chỗ',price:'739.000.000 VNĐ',subtitle:'SUV đô thị rộng rãi, tiện nghi và giàu công nghệ cho gia đình hiện đại.',
    image:'assets/vehicles/territory-white.webp',cutout:true,
    query:'Ford%20Territory',quick:[['Chỗ ngồi','5 chỗ'],['Động cơ','1.5L EcoBoost'],['Hộp số','Tự động 7 cấp'],['Giá tham khảo','Từ 739 triệu']],
    intro:'Ford Territory cân bằng giữa không gian sử dụng, sự êm ái và các công nghệ hỗ trợ người lái. Đây là lựa chọn phù hợp cho nhu cầu đi lại đô thị, gia đình và những hành trình dài cuối tuần.',
    features:[['01','Không gian rộng rãi','Khoang cabin tối ưu cho 5 người, hàng ghế sau thoải mái và khoang hành lý linh hoạt.'],['02','Công nghệ trực quan','Cụm màn hình kỹ thuật số 12 inch tạo trải nghiệm điều khiển hiện đại và dễ quan sát.'],['03','Hỗ trợ lái thông minh','Camera 360 độ cùng các tính năng hỗ trợ an toàn giúp việc lái và đỗ xe tự tin hơn.']],
    variants:['Territory Trend','Territory Titanium','Territory Platinum','Territory Titanium X'],
    specs:[['Kiểu xe','SUV 5 chỗ'],['Động cơ','Xăng 1.5L EcoBoost'],['Hộp số','Tự động 7 cấp'],['Dẫn động','Cầu trước'],['Màn hình trung tâm','12 inch'],['Trang bị nổi bật','Camera 360°, cửa sổ trời toàn cảnh, gói hỗ trợ lái']],
    source:'Thông tin tham khảo theo Ford Việt Nam; trang bị thay đổi theo phiên bản.'
  },
  'everest.html':{
    name:'Ford Everest',kind:'SUV 7 chỗ',price:'1.129.000.000 VNĐ',subtitle:'SUV 7 chỗ mạnh mẽ, tiện nghi và linh hoạt cho cả gia đình lẫn hành trình khám phá.',
    image:'assets/vehicles/everest-white.webp',cutout:true,
    query:'Ford%20Everest',quick:[['Chỗ ngồi','7 chỗ'],['Động cơ','Diesel 2.0L / Xăng 2.3L'],['Hộp số','Tự động 10 cấp'],['Giá tham khảo','Từ 1,129 tỷ']],
    intro:'Ford Everest kết hợp khả năng vận hành chắc chắn với khoang nội thất ba hàng ghế. Nhiều cấu hình phiên bản giúp khách hàng lựa chọn giữa nhu cầu đô thị, tiện nghi cao cấp và khả năng đi địa hình.',
    features:[['01','Sẵn sàng nhiều địa hình','Các phiên bản dẫn động 4x4 và chế độ lái hỗ trợ người lái thích ứng với điều kiện vận hành.'],['02','Cabin ba hàng ghế','Không gian 7 chỗ linh hoạt, phù hợp gia đình và những chuyến đi dài.'],['03','Tiện nghi cao cấp','SYNC 4A, màn hình dọc 12 inch cùng nhiều trang bị tiện nghi tùy phiên bản.']],
    variants:['Everest Active','Everest Sport','Everest Titanium','Everest Platinum','Everest Platinum+'],
    specs:[['Kiểu xe','SUV 7 chỗ'],['Động cơ','Diesel Turbo 2.0L hoặc xăng EcoBoost 2.3L tùy phiên bản'],['Hộp số','Tự động 10 cấp'],['Dẫn động','4x2 hoặc 4x4'],['Màn hình trung tâm','SYNC 4A, tối đa 12 inch'],['Trang bị nổi bật','Camera 360°, hỗ trợ lái, ghế linh hoạt']],
    source:'Thông tin tham khảo theo Ford Việt Nam; cấu hình động cơ và trang bị thay đổi theo phiên bản.'
  },
  'explorer.html':{
    name:'Ford Explorer',kind:'SUV 7 chỗ cao cấp',price:'2.099.000.000 VNĐ',subtitle:'SUV cỡ lớn rộng rãi, mạnh mẽ và tiện nghi cho gia đình cần không gian cao cấp.',
    image:'assets/vehicles/explorer-black-cutout.png',cutout:true,query:'Ford%20Explorer',quick:[['Chỗ ngồi','7 chỗ'],['Động cơ','2.3L EcoBoost'],['Hộp số','Tự động 10 cấp'],['Dẫn động','4WD']],
    intro:'Ford Explorer mang đến không gian ba hàng ghế rộng rãi, khả năng vận hành mạnh mẽ và nhiều tiện nghi cho những hành trình dài. Bộ ảnh thực tế giúp khách hàng quan sát rõ ngoại thất, khoang lái và trang bị hàng ghế sau.',
    features:[['01','Ngoại hình bề thế','Thiết kế SUV cỡ lớn, lưới tản nhiệt mạ chrome và hệ thống chiếu sáng tạo diện mạo sang trọng.'],['02','Cabin tiện nghi','Khoang lái bố trí trực quan, ba hàng ghế linh hoạt và màn hình giải trí cho hành khách phía sau.'],['03','Vận hành tự tin','Động cơ EcoBoost, hộp số tự động 10 cấp và hệ dẫn động bốn bánh hỗ trợ nhiều điều kiện di chuyển.']],
    variants:['Explorer Limited 2.3L EcoBoost'],
    specs:[['Kiểu xe','SUV 7 chỗ'],['Động cơ','Xăng EcoBoost 2.3L'],['Công suất cực đại','301,2 PS'],['Mô-men xoắn cực đại','431,5 Nm'],['Hộp số','Tự động 10 cấp'],['Dẫn động','Bốn bánh toàn thời gian 4WD'],['Cửa sổ trời','Toàn cảnh hai tấm'],['Trang bị nổi bật','Camera 360°, ghế da, màn hình hàng ghế sau, hỗ trợ lái']],
    source:'Thông tin tham khảo theo cấu hình Explorer đã được phân phối tại Việt Nam; giá, xe có sẵn và trang bị cần được xác nhận tại thời điểm tư vấn.'
  },
  'ranger.html':{
    name:'Ford Ranger',kind:'Bán tải',price:'707.000.000 VNĐ',subtitle:'Bán tải đa dụng cho công việc, gia đình và những hành trình cần sự bền bỉ.',
    image:'assets/vehicles/ranger-gold.webp',cutout:true,
    query:'Ford%20Ranger',quick:[['Chỗ ngồi','5 chỗ'],['Động cơ','Diesel 2.0L / V6 3.0L'],['Dẫn động','4x2 / 4x4'],['Giá tham khảo','Từ 707 triệu']],
    intro:'Ford Ranger được phát triển để đáp ứng cả nhu cầu chuyên chở và sử dụng hàng ngày. Thùng hàng thực dụng, khung gầm chắc chắn và khoang lái hiện đại tạo nên một mẫu bán tải linh hoạt.',
    features:[['01','Đa dụng mỗi ngày','Thùng hàng rộng, nhiều vị trí buộc hàng và khả năng chuyên chở phục vụ đa dạng công việc.'],['02','Vận hành linh hoạt','Nhiều cấu hình động cơ và dẫn động giúp khách hàng chọn đúng nhu cầu sử dụng.'],['03','Kết nối hiện đại','SYNC 4 cùng màn hình cảm ứng lớn và các công nghệ hỗ trợ lái tùy phiên bản.']],
    variants:['Ranger XL','Ranger XLS 4x2','Ranger XLS 4x4','Ranger Wildtrak 2.0L','Ranger Wildtrak 3.0L V6'],
    specs:[['Kiểu xe','Bán tải cabin kép, 5 chỗ'],['Động cơ','Diesel Turbo 2.0L hoặc V6 3.0L tùy phiên bản'],['Hộp số','Số sàn hoặc tự động tùy phiên bản'],['Dẫn động','4x2 hoặc 4x4'],['Chế độ lái','Tối đa 6 chế độ tùy phiên bản'],['Trang bị nổi bật','SYNC 4, camera 360°, khóa vi sai cầu sau']],
    source:'Thông tin tham khảo theo Ford Việt Nam; cấu hình thay đổi theo từng phiên bản Ranger.'
  },
  'raptor.html':{
    name:'Ranger Raptor',kind:'Ford Performance',price:'1.448.000.000 VNĐ',subtitle:'Bán tải hiệu năng cao với động cơ V6 mạnh mẽ và phần cứng chuyên biệt cho off-road.',
    image:'assets/vehicles/raptor-steel.webp',cutout:true,
    query:'Ranger%20Raptor',quick:[['Công suất','397 PS'],['Mô-men xoắn','583 Nm'],['Động cơ','V6 3.0L Twin-Turbo'],['Dẫn động','4WD']],
    intro:'Ranger Raptor được Ford Performance tinh chỉnh cho trải nghiệm vận hành giàu cảm xúc. Động cơ V6 3.0L, hệ dẫn động 4WD và hệ thống giảm chấn điện tử tạo khác biệt rõ rệt trên nhiều bề mặt.',
    features:[['01','V6 Twin-Turbo','Công suất 397 PS và mô-men xoắn 583 Nm cho khả năng phản hồi mạnh mẽ.'],['02','Khung gầm hiệu năng cao','Giảm chấn điện tử và hệ thống treo chuyên biệt hỗ trợ kiểm soát thân xe.'],['03','Kiểm soát địa hình','Dẫn động 4WD, khóa vi sai trước/sau và nhiều chế độ lái cho điều kiện khác nhau.']],
    variants:['Ranger Raptor 3.0L V6 4WD AT'],
    specs:[['Kiểu xe','Bán tải hiệu năng cao, 5 chỗ'],['Động cơ','Xăng EcoBoost Twin-Turbo 3.0L V6'],['Công suất cực đại','397 PS tại 5.650 vòng/phút'],['Mô-men xoắn cực đại','583 Nm tại 3.500 vòng/phút'],['Hộp số','Tự động điện tử 10 cấp'],['Khoảng sáng gầm','230 mm'],['Màn hình','Cảm ứng 12 inch và đồng hồ 12,4 inch']],
    source:'Thông số tham khảo theo catalogue Ranger Raptor 2026 của Ford Việt Nam.'
  },
  'transit.html':{
    name:'Ford Transit',kind:'Xe thương mại',price:'907.000.000 VNĐ',subtitle:'Giải pháp vận chuyển 16–18 chỗ rộng rãi, tiện nghi và tối ưu cho hoạt động kinh doanh.',
    image:'assets/vehicles/transit-silver.webp',cutout:true,
    query:'Ford%20Transit',quick:[['Số chỗ','16–18 chỗ'],['Động cơ','Diesel 2.3L'],['Hộp số','Số sàn 6 cấp'],['Giá tham khảo','Từ 907 triệu']],
    intro:'Ford Transit hướng đến doanh nghiệp vận tải, du lịch và đưa đón với không gian lớn, thiết kế thực dụng và các cấu hình 16–18 chỗ. Ba phiên bản giúp tối ưu mức đầu tư theo mô hình khai thác.',
    features:[['01','Khoang hành khách lớn','Thiết kế thân xe cao và dài tạo không gian thoải mái cho hành khách và hành lý.'],['02','Vận hành kinh tế','Động cơ Diesel 2.3L kết hợp hộp số sàn 6 cấp phục vụ nhu cầu khai thác liên tục.'],['03','Tiện nghi số hóa','Các bản Premium có màn hình cảm ứng và cụm đồng hồ kỹ thuật số 12,3 inch.']],
    variants:['Transit Trend 16 chỗ','Transit Premium 16 chỗ','Transit Premium+ 18 chỗ'],
    specs:[['Kiểu xe','Xe thương mại 16 hoặc 18 chỗ'],['Động cơ','Diesel 2.3L'],['Hộp số','Số sàn 6 cấp'],['Kích thước D x R x C','5.998 x 2.068 x 2.775 mm'],['Chiều dài cơ sở','3.750 mm'],['Màn hình','8 inch hoặc 12,3 inch tùy phiên bản']],
    source:'Thông tin tham khảo theo Ford Việt Nam; số chỗ và trang bị thay đổi theo phiên bản.'
  },
  'mustang-mach-e.html':{
    name:'Mustang Mach-E',kind:'SUV thuần điện',price:'1.699.000.000 VNĐ',subtitle:'SUV điện hiệu năng cao kết hợp khả năng tăng tốc tức thì với thiết kế mang tinh thần Mustang.',
    image:'assets/vehicles/mach-e-red.webp',cutout:true,
    query:'Mustang%20Mach-E',quick:[['Tầm hoạt động','Lên đến 550 km'],['Công suất','395 PS'],['Mô-men xoắn','627 Nm'],['Dẫn động','AWD']],
    intro:'Mustang Mach-E mang trải nghiệm vận hành điện vào một mẫu SUV 5 chỗ thực dụng. Hệ dẫn động AWD, phản hồi tức thì và hệ sinh thái kết nối tạo nên phong cách hiện đại khác biệt.',
    features:[['01','Hiệu năng điện','Công suất 395 PS và mô-men xoắn 627 Nm mang lại phản hồi nhanh, liền mạch.'],['02','Tầm hoạt động dài','Phạm vi công bố lên đến 550 km sau mỗi lần sạc đầy trong điều kiện tiêu chuẩn.'],['03','Khoang lái số hóa','Màn hình trung tâm lớn, kết nối thông minh và các công nghệ hỗ trợ người lái.']],
    variants:['Mustang Mach-E Premium AWD'],
    specs:[['Kiểu xe','SUV thuần điện 5 chỗ'],['Hệ truyền động','Hai cầu chủ động toàn thời gian AWD'],['Công suất cực đại','395 PS'],['Mô-men xoắn cực đại','627 Nm'],['Tầm hoạt động công bố','Lên đến 550 km'],['Trang bị nổi bật','Hỗ trợ lái, kết nối ứng dụng Ford, sạc nhanh DC']],
    source:'Thông tin tham khảo theo Ford Việt Nam; tầm hoạt động thực tế phụ thuộc điều kiện sử dụng.'
  }
};
var routeVehicle=location.pathname.replace(/\/+$/,'').split('/').pop()||'territory';
var currentVehicle=routeVehicle.indexOf('.')>-1?routeVehicle:routeVehicle+'.html';
var car=vehicleData[currentVehicle]||vehicleData['territory.html'];
document.title=car.name+' | Ford Mỹ Đình';
var meta=document.querySelector('meta[name="description"]');if(meta)meta.content='Khám phá '+car.name+': giá tham khảo, phiên bản, thông số và đăng ký lái thử tại Ford Mỹ Đình.';
function rows(items,cls){return items.map(function(x){return '<div class="'+cls+'"><span>'+x[0]+'</span><strong>'+x[1]+'</strong></div>'}).join('')}
function models(){return vehiclePages.map(function(file){return '<a class="model-link'+(file===currentVehicle?' active':'')+'" href="'+file+'">'+vehicleData[file].name+'</a>'}).join('')}
function features(){return car.features.map(function(x){return '<article class="feature-card"><b>'+x[0]+'</b><h3>'+x[1]+'</h3><p>'+x[2]+'</p></article>'}).join('')}
function variants(){return car.variants.map(function(x){return '<div class="variant">'+x+'</div>'}).join('')}
document.getElementById('vehicleApp').innerHTML='<section class="vehicle-hero"><div class="wrap"><div class="vehicle-crumbs"><a href="index.html">Trang chủ</a> / <a href="products.html">Sản phẩm</a> / '+car.name+'</div><div class="vehicle-grid"><div class="vehicle-copy"><p class="vehicle-kicker">'+car.kind+'</p><h1>'+car.name+'</h1><p class="vehicle-subtitle">'+car.subtitle+'</p><div class="vehicle-price"><small>Giá bán lẻ khuyến nghị tham khảo từ</small><strong>'+car.price+'</strong></div><div class="vehicle-actions"><a class="btn btn-light" href="contact.html?car='+car.query+'#quote">Nhận báo giá →</a><a class="btn btn-ghost" href="contact.html?car='+car.query+'#quote">Đăng ký lái thử</a></div></div><div class="vehicle-visual"><img src="'+car.image+'" alt="'+car.name+'"></div></div></div></section><nav class="model-nav" aria-label="Các mẫu xe"><div class="wrap">'+models()+'</div></nav><section class="vehicle-section"><div class="wrap"><div class="quick-specs">'+rows(car.quick,'quick-spec')+'</div></div></section><section class="vehicle-section soft"><div class="wrap"><div class="detail-heading"><p class="eyebrow">Tổng quan</p><h2>Thiết kế cho đúng nhu cầu sử dụng</h2><p>'+car.intro+'</p></div><div class="feature-grid">'+features()+'</div></div></section><section class="vehicle-section" id="catalogue"><div class="wrap"><div class="detail-heading"><p class="eyebrow">Catalogue phiên bản</p><h2>Lựa chọn '+car.name+'</h2><p>Tư vấn viên sẽ giúp bạn so sánh trang bị, màu xe, xe có sẵn và chi phí lăn bánh.</p></div><div class="variant-list">'+variants()+'</div></div></section><section class="vehicle-section soft" id="specifications"><div class="wrap grid-2"><div><div class="detail-heading"><p class="eyebrow">Thông số kỹ thuật</p><h2>Những dữ liệu cần biết</h2><p>Thông số dưới đây giúp bạn so sánh nhanh trước khi chọn phiên bản cụ thể.</p></div><p class="detail-note">'+car.source+'</p></div><div class="spec-table">'+rows(car.specs,'spec-row')+'</div></div></section><section class="vehicle-section"><div class="wrap"><div class="detail-cta"><div><h2>Nhận giá '+car.name+' hôm nay</h2><p>Kiểm tra xe có sẵn, ưu đãi, trả góp và chi phí lăn bánh tại Hà Nội.</p></div><a class="btn btn-light" href="contact.html?car='+car.query+'#quote">Yêu cầu tư vấn →</a></div></div></section>';
