import MdiDiscord from '@/components/icons/social/discord'
import MdiFacebook from '@/components/icons/social/facebook'
import MdiInstagram from '@/components/icons/social/instagram'
import IconLink from '@/components/links/iconLink'

export default function SocialBtnGroup() {
	return (
		<div className='items-center hidden mr-3 lg:flex'>
			<IconLink href='#'>
				<MdiDiscord className='w-5  h-10' />
			</IconLink>
			<IconLink>
				<MdiFacebook className='w-5  h-10' />
			</IconLink>
			<IconLink>
				<MdiInstagram className='w-5  h-10' />
			</IconLink>
		</div>
	)
}
