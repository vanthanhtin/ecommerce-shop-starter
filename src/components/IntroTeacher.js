import React, {useEffect} from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import symbol1 from '../img/teacher.png'
import symbol2 from '../img/poodle.png'
import symbol3 from '../img/certificate.png'
import intro from '../img/intro.png'
import Aos from 'aos'
import 'aos/dist/aos'



const IntroTeacher = () => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h1 className='text-lg w-fit   text-secondary bg-white px-4 my-4 rounded-lg  shadow-3xl'>PROFILE MASTER</h1>
              <h1 className="mt-2 text-3xl tracking-tight text-nau sm:text-4xl">Dương Cẩm Tiên</h1>
              <p className="mt-6 text-lg leading-7 text-nau">
                Hiệu trưởng của Học viện cũng chính là thành viên, lãnh đạo quốc gia của IGA Việt Nam. Chương trình đào tạo chuẩn quốc tế là điểm đầu tiên cuốn hút học viên lựa chọn. Theo đó, chương trình đào tạo vừa có tính hiện đại vượt bậc nhờ tiếp thu từ nền giáo dục phương Tây vừa kế thừa giá trị của môi trường Việt Nam. Học viện luôn được cập nhật các chương trình học tập, cải cách mới nhất. Giáo trình đưa vào giảng dạy được các giáo viên hàng đầu thế giới soạn thảo.
              </p>
              <dl className="mt-10 max-w-xl space-y-4 text-base leading-7 text-nau lg:max-w-none">
                <div className="relative pl-9 flex">
                    <img src={symbol1} className='w-7 h-7 mt-[10px] leading-3 mr-3' />
                    <dd className="inline">Với nhiều kinh nghiệm trong lĩnh vực đào tạo grooming tại các trường nổi tiếng Quốc tế.</dd>
                </div>
                <div className="relative pl-9 flex">
                    <img src={symbol2} className='w-7 h-7 mt-[10px] leading-3 mr-3' />
                    <dd className="inline">Đảm bảo 90% các tiết học thực hành trên cún thật trong khi học và chỉnh sửa bài tập hàng ngày giúp các bạn học viên nâng cao tay nghề.</dd>
                </div>
                <div className="relative pl-9 flex">
                    <img src={symbol3} className='w-7 h-7 mt-[10px] leading-3 mr-3' />
                    <dd className="inline">Được chứng nhận bởi CenGrooming VietNam sau khi hoàn thành bài tốt nghiệp.</dd>
                </div>
              </dl>
            </div>
          </div>
          <img
            src={intro}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[60rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
            data-aos='fade-left'
          />
        </div>
      </div>
    </div>
  )
}

export default IntroTeacher;