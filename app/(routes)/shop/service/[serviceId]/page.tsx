import GetService from "@/actions/GetService";
import Gallery from "@/components/gallery/Gallery";
import InfoService from "@/components/info/InfoService";
import Container from "@/components/ui/container/Container";


interface ServicePageProps {
    params: {
        serviceId: string;
    };
}



const ServicePage: React.FC<ServicePageProps> = async({ params }) => {

    const service = await GetService(params.serviceId);

    console.log(service);

  return (
    <div>
        <Container>
            <div className="px-4 -y-10 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    <Gallery images={service.images} />
                    <div>
                        <InfoService data={service} />
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default ServicePage