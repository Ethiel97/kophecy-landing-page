import NextNProgress from 'nextjs-progressbar'
import {NextSeo} from 'next-seo'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({children}) {

    const appDescription = "Receive daily, browse, share, search inspirational quotes from the author Ellen G. White in your Christian walk";
    const appTitle = "Kophecy - the Spirit of Prophecy in daily life";

    return (
        //define useful head tags for SEO using Head component from next
        <>
            <NextSeo
                title={appTitle}
                description={appDescription}
                canonical="https://kophecy.vercel.app"
                openGraph={{
                    url: 'https://kophecy.vercel.app',
                    type: 'website',
                    title: appTitle,
                    description: appDescription,
                    images: [
                        {
                            url: 'https://github.com/Ethiel97/kophecy/blob/master/assets/img/banner.jpg',
                            width: 1920,
                            height: 2420,
                            alt: 'Og Image Alt',
                            type: 'image/jpg',
                        },
                    ],
                    site_name: 'Kophecy',
                }}
                twitter={{
                    handle: '@enthusiastDev',
                    site: '@enthusiastDev',
                    cardType: 'summary_large_image',
                }}
                additionalLinkTags={[
                    {
                        rel: 'preconnect',
                        href: 'https://fonts.googleapis.com',
                        crossOrigin: "true",
                    },
                    {
                        rel: 'preconnect',
                        href: 'https://fonts.gstatic.com',
                        crossOrigin: "true",
                    },
                    {
                        rel: 'stylesheet',
                        href: 'https://fonts.googleapis.com/css2?family=Inter&display=swap',
                    },
                    {
                        rel: 'apple-touch-icon',
                        href: '/ico.png',
                        sizes: '128X128',
                        type: "image/png"
                    },
                    {
                        rel: 'icon',
                        href: '/ico.png',
                        sizes: '32X32',
                        type: "image/png"
                    },
                    {
                        rel: 'icon',
                        href: '/ico.png',
                        sizes: '16X16',
                        type: "image/png"
                    },
                ]}
            />

            <NextNProgress
                showOnShallow={true}
                startPosition={0}
                stopDelayMs={200}
                nonce={""}
                color="#ef4444"
                options={{showSpinner: false}}
                height={2}
            />

            <div className="antialiased bg-body text-body font-body">
                <Navbar/>
                <main>{children}</main>
                <Footer/>
            </div>
        </>
    )
}