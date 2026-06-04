/**
 * Personal Portfolio Website JS Logic
 * Handled Features: SPA Section routing, Theme switching, Mobile navigation, Modal popups for exercise documents.
 */

// ==========================================
// EXERCISE DATABASE
// ==========================================
const EXERCISES_DATA = {
  1: {
    title: "Bài 1: Thao tác cơ bản với tệp tin và thư mục",
    objective: "Thực hành làm quen hệ thống tệp tin, thiết lập cấu trúc cây thư mục và thực hành các thao tác quản trị tệp tin cơ bản trên hệ điều hành Windows để rèn luyện thói quen tổ chức dữ liệu khoa học.",
    process: `1. <strong>Tạo thư mục làm việc:</strong> Tạo thư mục gốc với cấu trúc tên chuẩn không dấu: <code>ThucHanh_TranNgocMinh</code> trên ổ đĩa của máy tính.<br>
              2. <strong>Thao tác quản lý tệp:</strong> Thực hiện tạo mới tệp <code>GhiChu.txt</code>, đổi tên thành <code>GhiChuQuanTrong.txt</code>, và tạo thư mục con <code>TaiLieu</code> để phân loại.<br>
              3. <strong>Di chuyển và sao chép:</strong> Áp dụng các lệnh Copy/Paste và Cut/Paste để điều phối các tệp tin (bao gồm tệp <code>DiChuyen.txt</code>) vào thư mục con.<br>
              4. <strong>Quản lý thùng rác:</strong> Thực hành xóa tạm thời, xóa vĩnh viễn tệp tin bằng phím Shift + Delete và khôi phục (Restore) tệp tin từ Recycle Bin về vị trí ban đầu.`,
    pdfPath: "assets/BaiTap/Bai1.pdf"
  },
  2: {
    title: "Bài 2: Tìm kiếm và đánh giá thông tin học thuật",
    objective: "Lựa chọn chủ đề nghiên cứu học thuật và thực hành kỹ năng tìm kiếm thông tin bằng toán tử nâng cao, kết hợp đánh giá độ tin cậy của tài nguyên dựa trên mô hình chuẩn CRAAP.",
    process: `1. <strong>Chủ đề nghiên cứu:</strong> Lựa chọn đề tài liên quan đến chuyên ngành: <em>"Tác động của Trí tuệ Nhân tạo (AI) đến hành vi và quyết định mua sắm trực tuyến của thế hệ Z (Gen Z) tại Việt Nam"</em>.<br>
              2. <strong>Khai thác đa dạng nguồn:</strong> Tìm kiếm tài liệu từ 5 loại nguồn khác nhau (cơ sở dữ liệu học thuật Google Scholar, tạp chí khoa học chuyên ngành, sách chuyên khảo, báo cáo ngành McKinsey/Statista, và các nguồn tin tức mở). Thu thập tổng cộng 11 tài liệu tham khảo chất lượng.<br>
              3. <strong>Đánh giá tài liệu (CRAAP):</strong> Phân tích độ tin cậy của từng nguồn dựa trên 5 khía cạnh: Currency (Cập nhật), Relevance (Phù hợp), Authority (Thẩm quyền), Accuracy (Chính xác), và Purpose (Mục đích).<br>
              4. <strong>Lập danh mục:</strong> Xuất bảng ma trận đánh giá ưu/nhược điểm và lập danh mục tài liệu tham khảo theo định dạng chuẩn Harvard.`,
    pdfPath: "assets/BaiTap/Bai2.pdf"
  },
  3: {
    title: "Bài 3: Viết Prompt hiệu quả cho các tác vụ học tập",
    objective: "Làm chủ kỹ nghệ viết câu lệnh (Prompt Engineering) với mô hình ngôn ngữ lớn để tối ưu hóa hiệu quả học tập và giải quyết các tác vụ tư duy phức tạp.",
    process: `1. <strong>Lựa chọn 3 tác vụ học tập:</strong> Thiết lập thử nghiệm cho 3 bài toán: Tóm tắt tài liệu học thuật về AI; Giải thích khái niệm phức tạp (Thuyết tương đối rộng); Thiết lập bộ câu hỏi ôn tập Lịch sử Thế chiến 2.<br>
              2. <strong>Thử nghiệm các phiên bản Prompt:</strong> Đối chiếu kết quả trả về từ mô hình ChatGPT-4o giữa các cấp độ câu lệnh: Cơ bản (thô), Cải tiến (có cấu trúc ngắn), và Nâng cao (sử dụng kỹ thuật đóng vai Role-playing, chuỗi suy nghĩ Chain-of-Thought (CoT), phép ẩn dụ so sánh, và phân loại theo thang Bloom).<br>
              3. <strong>Xây dựng bộ nguyên tắc C.R.E.A.T.E:</strong> Tổng hợp quy trình viết Prompt tối ưu gồm 6 chữ vàng: Context (Bối cảnh), Role (Vai trò), Evidence/Examples (Ví dụ), Action (Hành động), Target (Đối tượng), và Evaluation (Đánh giá).`,
    pdfPath: "assets/BaiTap/Bai3.pdf"
  },
  4: {
    title: "Bài 4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    objective: "Ứng dụng các công cụ đám mây và phần mềm quản lý công việc để tổ chức luồng làm việc nhóm trực tuyến đồng bộ, tối ưu hóa giao tiếp và kiểm soát tiến độ dự án.",
    process: `1. <strong>Chủ đề dự án nhóm:</strong> Ứng dụng của AI&CNS trong đời sống: <em>"AI trong giáo dục: Cơ hội và thách thức"</em>.<br>
              2. <strong>Quản lý công việc qua Trello:</strong> Sử dụng bảng Kanban để phân rã nhiệm vụ và gán trạng thái (To-do, Doing, Done). Tối ưu hóa phân loại bằng hệ thống nhãn màu (Label) ưu tiên và thiết lập Due Date.<br>
              3. <strong>Soạn thảo cộng tác Google Workspace:</strong> Sử dụng Google Docs/Sheets ở chế độ "Đề xuất" (Suggesting mode) và quản lý lịch sử phiên bản để tránh xung đột nội dung. Đồng bộ tài nguyên dùng chung trên Google Drive.<br>
              4. <strong>Tương tác nhóm qua Messenger:</strong> Thiết lập kênh trao đổi thông tin khẩn cấp, sử dụng tính năng ghim tin nhắn và liên kết trực tiếp với thẻ Trello để theo dõi công việc không bị trôi thông báo.`,
    pdfPath: "assets/BaiTap/Bai4.pdf"
  },
  5: {
    title: "Bài 5: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    objective: "Kết hợp sức mạnh sáng tạo từ nhiều công cụ AI tạo sinh khác nhau để hoàn thành bài viết truyền thông số chất lượng, tối ưu hóa quy trình sản xuất nội dung chuyên nghiệp.",
    process: `1. <strong>Xây dựng bài viết với Google Gemini:</strong> Lên ý tưởng, dàn ý và viết bản nháp cho bài viết blog: <em>"TỪ 'GÕ GOOGLE' ĐẾN 'HỎI AI': GEN Z ĐANG HỌC NHƯ THẾ NÀO?"</em>. Can thiệp sửa viết lại hơn 60% văn bản để tăng tính cá nhân hóa và loại bỏ lỗi ảo giác của AI.<br>
              2. <strong>Sinh ảnh minh họa với Copilot DALL-E 3:</strong> Viết prompt mô tả chi tiết để sinh ảnh hoạt hình 3D về một sinh viên Việt Nam học tập bên cạnh một robot phát sáng thân thiện. Sử dụng Canva để xử lý hậu kỳ và chèn chữ.<br>
              3. <strong>Dàn trang hoàn chỉnh trên Canva:</strong> Thiết kế bố cục bài blog bằng cách sử dụng các khối màu phủ mờ (Gradient overlay), chèn font Montserrat & Lora hiện đại, tạo nên ấn phẩm hoàn thiện bắt mắt.<br>
              4. <strong>Phân tích vai trò AI:</strong> Đánh giá ưu nhược điểm của chuỗi công cụ khép kín: Gemini làm "não bộ", Copilot làm "họa sĩ" và Canva làm "nhà xuất bản".`,
    pdfPath: "assets/BaiTap/Bai5.pdf"
  },
  6: {
    title: "Bài 6: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    objective: "Nghiên cứu các quy chế học thuật về AI tạo sinh tại các trường đại học lớn, từ đó xây dựng ý thức liêm chính khoa học và thiết lập bộ nguyên tắc sử dụng công nghệ có trách nhiệm.",
    process: `1. <strong>Nghiên cứu chính sách học đường:</strong> Tìm hiểu chính sách quản lý Generative AI tại các trường Đại học lớn ở Việt Nam (ĐHQGHN, Bách Khoa, FPT), phân biệt rõ ranh giới giữa việc dùng AI làm trợ lý học tập hợp lệ và hành vi gian lận học thuật.<br>
              2. <strong>Thực hành bài luận mẫu có kiểm soát:</strong> Lập dàn ý bài luận Xã hội học chủ đề: <em>"Tác động của xu hướng Thời trang nhanh (Fast Fashion) đối với Gen Z tại Việt Nam"</em>. Sử dụng AI hỗ trợ khung và chủ động viết lại, bổ sung ví dụ TikTok Shop/Shopee thực tế, trích dẫn rõ nguồn gốc theo chuẩn APA.<br>
              3. <strong>Xây dựng Bộ 7 nguyên tắc đạo đức cá nhân:</strong> Thiết lập hệ nguyên tắc ứng xử với AI (bao gồm: Tư duy trước AI sau, Bảo mật thông tin, Trích dẫn 100%, v.v.).<br>
              4. <strong>Thiết kế Infographic tuyên truyền:</strong> Sử dụng Canva vẽ infographic chủ đề: <em>"Sử dụng AI trong học thuật: Ranh giới giữa Trợ thủ và Kẻ gian lận"</em> để làm rõ các điều Nên làm (DOs) và Không nên làm (DON'Ts).`,
    pdfPath: "assets/BaiTap/Bai6.pdf"
  }
};

// ==========================================
// DOM ELEMENTS SELECTORS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // INITIALIZE PROFILE FROM CONFIG (Plant.js)
  // ==========================================
  if (typeof PROFILE_CONFIG !== 'undefined') {
    const elName = document.getElementById('profile-display-name');
    const elTag = document.getElementById('profile-display-tag');
    const elMajor = document.getElementById('profile-major');
    const elHobbies = document.getElementById('profile-hobbies');
    const elFooterName = document.getElementById('footer-student-name');
    const elEmailLink = document.querySelector('a[aria-label="Mail to"]');
    const elBadges = document.querySelectorAll('.badge-group .badge');

    if (elName) elName.textContent = PROFILE_CONFIG.fullName;
    if (elTag) elTag.textContent = PROFILE_CONFIG.titleTag;
    if (elMajor) elMajor.textContent = PROFILE_CONFIG.major;
    if (elHobbies) elHobbies.textContent = PROFILE_CONFIG.hobbies;
    if (elFooterName) elFooterName.textContent = PROFILE_CONFIG.fullNameFooter;
    if (elEmailLink) elEmailLink.setAttribute('href', `mailto:${PROFILE_CONFIG.email}`);
    
    if (elBadges && elBadges.length >= 4) {
      elBadges[0].textContent = `Lớp: ${PROFILE_CONFIG.classBadge}`;
      elBadges[1].textContent = `MSV: ${PROFILE_CONFIG.studentId}`;
      elBadges[2].textContent = PROFILE_CONFIG.department;
      elBadges[3].textContent = PROFILE_CONFIG.university;
    }
  }

  const themeToggleBtn = document.getElementById('theme-toggle');
  const burgerMenuBtn = document.getElementById('burger-menu');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const pageSections = document.querySelectorAll('.page-section');
  const brandLogo = document.getElementById('brand-logo');
  
  // Modal Elements
  const modal = document.getElementById('exercise-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalTitle = document.getElementById('modal-exercise-title');
  const modalObjective = document.getElementById('modal-exercise-objective');
  const modalProcess = document.getElementById('modal-exercise-process');
  const pdfFilePath = document.getElementById('pdf-file-path');
  const pdfPreviewFrame = document.getElementById('pdf-preview-frame');
  const pdfFallbackMsg = document.getElementById('pdf-fallback-msg');
  const pdfDownloadLink = document.getElementById('pdf-download-link');
  const pdfFallbackTitle = document.getElementById('pdf-fallback-title');
  
  // View Detail Buttons
  const viewDetailBtns = document.querySelectorAll('.btn-view-detail');

  // ==========================================
  // SPA NAVIGATION ROUTING
  // ==========================================
  function switchPage(targetSectionId) {
    // Deactivate all sections and links
    pageSections.forEach(section => {
      section.classList.remove('active');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Activate selected section
    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
      targetSection.classList.add('active');
      
      // Update link status
      const correspondingLink = document.querySelector(`.nav-link[data-target="${targetSectionId}"]`);
      if (correspondingLink) {
        correspondingLink.classList.add('active');
      }

      // Close mobile menu if active
      if (navMenu) {
        navMenu.classList.remove('active');
      }
      if (burgerMenuBtn) {
        burgerMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
      
      // Trigger animations for custom charts when going to Reflection
      if (targetSectionId === 'reflection-section') {
        animateSkillsProgress();
      } else {
        resetSkillsProgress();
      }
      
      // Scroll to top of the main container smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Bind click events on nav-links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      switchPage(targetId);
      
      // Update URL hash without jumping page
      history.pushState(null, null, link.getAttribute('href'));
    });
  });

  // Logo click triggers home
  if (brandLogo) {
    brandLogo.addEventListener('click', (e) => {
      e.preventDefault();
      switchPage('intro-section');
      history.pushState(null, null, '#intro');
    });
  }

  // Handle page load hash routing
  function handleHashRoute() {
    const hash = window.location.hash;
    if (hash === '#exercises') {
      switchPage('exercises-section');
    } else if (hash === '#reflection') {
      switchPage('reflection-section');
    } else {
      switchPage('intro-section');
    }
  }

  // Listen to hashchange
  window.addEventListener('hashchange', handleHashRoute);
  // Execute on initial page load
  handleHashRoute();

  // ==========================================
  // MOBILE NAVIGATION MENU
  // ==========================================
  if (burgerMenuBtn && navMenu) {
    burgerMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      if (navMenu.classList.contains('active')) {
        burgerMenuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      } else {
        burgerMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    });
  }

  // ==========================================
  // LIGHT & DARK THEME SWITCHER
  // ==========================================
  // Check and apply stored theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.setAttribute('data-theme', savedTheme);
  
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      document.body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // ==========================================
  // SKILLS PROGRESS BAR ANIMATIONS
  // ==========================================
  function animateSkillsProgress() {
    const progressFills = document.querySelectorAll('.skill-bar-fill');
    progressFills.forEach(fill => {
      const widthPercent = fill.getAttribute('data-width');
      fill.style.width = widthPercent;
    });
  }

  function resetSkillsProgress() {
    const progressFills = document.querySelectorAll('.skill-bar-fill');
    progressFills.forEach(fill => {
      fill.style.width = '0%';
    });
  }

  // ==========================================
  // MODAL EXERCISE DETAIL & PDF VIEW LOGIC
  // ==========================================
  function openModal(exerciseId) {
    const data = EXERCISES_DATA[exerciseId];
    if (!data) return;

    // Fill textual content
    modalTitle.textContent = data.title;
    modalObjective.innerHTML = data.objective;
    modalProcess.innerHTML = data.process;
    pdfFilePath.textContent = data.pdfPath;
    pdfDownloadLink.setAttribute('href', data.pdfPath);

    // Show modal container
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Disable background scrolling

    // Handle PDF rendering
    pdfPreviewFrame.style.display = 'none';
    pdfFallbackMsg.style.display = 'flex';
    pdfFallbackTitle.textContent = "Đang kết nối tài liệu PDF báo cáo...";
    
    // Attempt to load PDF into iframe
    // Note: Local paths in local files might trigger some CORS or load policies on certain browsers,
    // so we set the source and listen for errors.
    pdfPreviewFrame.setAttribute('src', data.pdfPath);
    
    // We add a tiny delay to simulate a load and switch to iframe if file path checks out,
    // or let the user click download directly if they haven't uploaded it.
    // In standard conditions when the file is present in Baitap/, the iframe will display it.
    // However, since we cannot easily detect 404 in iframe on local files, 
    // we instruct the user to ensure the file exists. 
    setTimeout(() => {
      // Show iframe preview. If browser blocks it or file doesn't exist, it displays standard browser placeholder
      // and the user can still use the Download button below.
      pdfPreviewFrame.style.display = 'block';
      pdfFallbackMsg.style.display = 'none';
    }, 600);
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Re-enable background scrolling
    // Clear iframe src to stop loading
    pdfPreviewFrame.setAttribute('src', '');
  }

  // Bind clicks to Open Buttons
  viewDetailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const exerciseId = btn.getAttribute('data-id');
      openModal(exerciseId);
    });
  });

  // Bind clicks to Close Buttons
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // ==========================================
  // PREMIUM UPGRADE JS
  // ==========================================

  // 1. Scroll Reveal with Intersection Observer
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

  revealElements.forEach(el => revealObserver.observe(el));

  // 2. 3D Tilt Effect on Cards
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const tiltX = ((y - centerY) / centerY) * -10; 
      const tiltY = ((x - centerX) / centerX) * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
  });

  // 3. Typing Effect
  const typingTarget = document.querySelector('.typing-effect');
  if (typingTarget) {
    const text = typingTarget.textContent;
    typingTarget.textContent = '';
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        typingTarget.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }
    setTimeout(typeWriter, 600);
  }

});
