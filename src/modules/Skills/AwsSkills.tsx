import React, { FC, useEffect } from 'react'
import Card from '@/UI/Card'
import classes from './Skills.module.css'
import cloudFrontIcon from '@/assets/cloudfront.jpg'
import ec2Icon from '@/assets/ec2.jpg'
import cognitoIcon from '@/assets/cognito.jpg'
import s3Icon from '@/assets/s3.png'
import route53Icon from '@/assets/route-53.png'
import lambdaIcon from '@/assets/lambda.png'
import vpcIcon from '@/assets/vpc.png'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const AwsSkills: FC = () => {
    const control = useAnimation()
    const [refInitial, inViewInitial] = useInView()
    const [ref, inView] = useInView()
    const [refStyling, inViewStyling] = useInView()

    const variant = {
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 }},
        hidden: { opacity: 0, scale: 0.85, y: -50 },
    }

    useEffect(() => {
        if (inViewInitial || inView) {
            control.start("visible")
        } else if (!inViewInitial && !inView && !inViewStyling) {
            control.start("hidden");
        }
    }, [control, inView, inViewInitial, inViewStyling])

    return (
        <motion.div
            className='mb-12 sm:mb-28 flex flex-col items-center'
            variants={variant}
            animate={control}
        >
            <h2 className='h2-title mb-10 md:mb-20'>AWS Skills (Cloud)</h2>
            <motion.div ref={refInitial}></motion.div>
            <div className='flex flex-col sm:flex-row w-full sm:w-auto gap-2 md:gap-5 flex-wrap max-w-3xl justify-center'>
                <Card className='p-4 sm:p-6 flex flex-col items-center gap-y-4 sm:gap-y-6 h-fit sm:self-end border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
                    <h2 className='text-xl font-semibold text-center'>Cognito</h2>
                    <img className='w-20 h-20 sm:w-20 sm:h-20 rounded-md' src={cognitoIcon} alt="Cognito Logo"/>
                </Card>
                <Card className='p-4 sm:p-8 flex flex-col items-center gap-y-4 sm:gap-y-6 h-fit border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
                    <h2 className='text-2xl md:text-3xl font-semibold text-center'>EC2</h2>
                    <img className='w-20 h-20 sm:w-24 sm:h-24 rounded-md' src={ec2Icon} alt="EC2 Logo"/>
                </Card>
                <Card className='p-4 sm:p-8 flex flex-col items-center gap-y-4 sm:gap-y-6 h-auto justify-center md:h-fit md:self-end border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
                    <h2 ref={refStyling} className='text-2xl md:text-3xl font-semibold text-cente'>S3</h2>
                    <img className='w-20 h-20 sm:w-24 sm:h-24 rounded-md' src={s3Icon} alt="Cognito Logo"/>
                </Card>
                <Card
                    className='p-4 sm:p-7 flex flex-col items-center gap-y-2 w-full sm:w-auto h-fit border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
                    <h2 className='text-xl font-semibold text-center'>Virtual Private Cloud (VPC)</h2>
                    <img className='h-14 sm:h-20 rounded-md' src={vpcIcon} alt="CloudFront Logo"/>
                    <ul>
                        <li className={classes.li}>Public Subnet</li>
                        <li className={classes.li}>Private Subnet</li>
                        <li className={classes.li}>Gateways</li>
                    </ul>
                </Card>
                <div className='flex flex-col items-center gap-2 md:gap-5 relative'>
                <Card className='p-4 sm:p-8 flex flex-col items-center gap-y-4 sm:gap-y-6 w-full sm:w-auto h-fit border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
                    <h2 className='text-2xl md:text-3xl font-semibold text-center'>Lambda</h2>
                    <img className='w-20 h-20 sm:w-24 sm:h-24 rounded-md' src={lambdaIcon} alt="Cognito Logo"/>
                </Card>
                <div className='absolute top-32' ref={ref}></div>
                    <Card
                        className='p-4 sm:p-6 flex flex-col items-center sm:self-start gap-y-4 sm:gap-y-2 w-full sm:w-auto h-fit border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
                        <h2 className='text-xl font-semibold text-center'>CloudFront</h2>
                        <img className='w-20 h-20 sm:w-20 sm:h-20 rounded-md' src={cloudFrontIcon} alt="CloudFront Logo"/>
                    </Card>
                </div>
                <Card
                    className='z-[1] p-4 sm:p-6 flex flex-col items-center gap-y-4 sm:gap-y-2 h-fit border-t border-gray-100 dark:border-transparent text-lm-primaryText dark:text-dm-primaryText'>
                    <h2 className='text-xl font-semibold text-center'>Route 53</h2>
                    <img className='w-20 h-20 sm:w-20 sm:h-20 rounded-md' src={route53Icon} alt="CloudFront Logo"/>
                </Card>
            </div>
        </motion.div>
    )
}

export default AwsSkills