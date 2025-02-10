import { ContentLeft, ContentRight } from "@/components/layouts/Sidebard";

const Example = () => {
    return (
        <>
            <ContentLeft>
                <h1>Left Content for Component Showcase</h1>
                <p>This is the left side content.</p>
            </ContentLeft>
            <ContentRight>
                <h1>Right Content for Component Showcase</h1>
                <p>This is the right side content.</p>
            </ContentRight>
        </>
    );
};

export default Example;