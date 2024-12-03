import { sJarisCurriculumImages } from '@/data'
import { Image } from '@nextui-org/react'
import React from 'react'

const SJarisOverview = () => {
  return (
    <div className="padding bg-jaris-white flex flex-col lg:flex-row gap-16 lg:px-64 xl:px-80 2xl:px-96">
			<div className="lg:w-2/3">
				<h3 className="subtitle text-jaris-blue font-semibold mb-2">
					Who We Are
				</h3>
				<h2 className="heading-secondary text-jaris-gold font-semibold">
					Jawahir Al-Riyadh International School (JARIS) is a subsidiary of
					Jawahir Al-Riyadh Educational Company (JAREC).
				</h2>
				<p className="subtitle text-jaris-black mt-10">
					JARIS founders are included in the First Batch of Saudi Educationists
					getting licenses as soon as the royal decree was issued authorizing
					Saudis to establish International Schools. Proudly JAREC possesses its
					own campuses for accommodating thousands of students. State-of-the-Art
					LABORATORIES, LIBRARIES, PLAYING GROUNDS, and SPACIOUS HALLS FOR
					EXTRACURRICULAR ACTIVITIES. The Campuses are located in the Centre of
					the city, easy to approach. JARIS has an affiliation with famous
					International Educational Boards both in Britain and Pakistan. The
					teachers are very experienced, well-known, and famous for their
					commitment to Education.
				</p>
			</div>

			{/* Right Curriculum Section */}
			<div className="lg:w-1/3 flex flex-col lg:flex-row gap-4 lg:justify-end">
				<div className="p-4 flex flex-col items-center bg-bg-text backdrop-blur-lg rounded-lg">
					<h3 className="text-jaris-red font-semibold text-lg heading-secondary uppercase">
						Curriculum
					</h3>
					<hr className="left-1/2 w-full mt-2 border-t-[1px] border-white opacity-60" />
					<div className="flex lg:flex-col gap-6 mt-4 items-center justify-center flex-wrap">
						{sJarisCurriculumImages.map((curriculum, index) => (
							<Image
								key={index}
								src={curriculum.imgSrc}
								alt={curriculum.title}
								width={90}
								className={`h-auto ${curriculum.title === "Jawahir" ? 'rounded-full' : 'rounded-none'}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
  )
}

export default SJarisOverview