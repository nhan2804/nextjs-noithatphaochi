interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Phào chỉ PS và lam sóng quán Cafe Gò Vấp',
    description: ` Phào chỉ PS không chỉ có tác dụng trang trí, tạo điểm nhấn nghệ thuật cho trần nhà và các góc tường, mà còn góp phần cải thiện độ bền và tính thẩm mỹ của công trình. Lam sóng, với thiết kế uốn lượn độc đáo, tạo cảm giác nhẹ nhàng và thư giãn, làm nổi bật phong cách độc đáo của quán cafe`,
    imgSrc: '/static/images/projects/cf-govap.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Nhà ở phào chỉ PS tháng 7',
    description: `Một dự án thú vị đang tiếp tục triển khai tại 83 Lê Niệm, Tân Phú, TP Hồ Chí Minh! Trong tháng 7 này, công trình phào chỉ đang trong quá trình bàn giao và hoàn thiện.`,
    imgSrc: '/static/images/projects/q10.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
