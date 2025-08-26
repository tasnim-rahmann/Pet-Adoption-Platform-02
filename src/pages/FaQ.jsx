const FaQ = () => {
    return (
        <div className="my-8 lg:my-12 mx-4 lg:mx-30 flex flex-col gap-2 lg:gap-4">
            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" defaultChecked />
                <div className="collapse-title font-semibold">How do I adopt a pet from your website?</div>
                <div className="collapse-content text-sm">
                    Browse available pets, click on the one you’re interested in, and complete the adoption application form.
                </div>
            </div>

            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">Is there an adoption fee?</div>
                <div className="collapse-content text-sm">
                    Yes, most pets have an adoption fee which helps cover vaccinations, spaying/neutering, and medical care.
                </div>
            </div>

            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">What documents do I need to adopt a pet?</div>
                <div className="collapse-content text-sm">
                    You’ll typically need a valid ID, proof of address, and in some cases, landlord permission if you rent.
                </div>
            </div>

            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">How long does the adoption process take?</div>
                <div className="collapse-content text-sm">
                    The process usually takes 2–7 days depending on background checks and application reviews.
                </div>
            </div>

            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">Can I meet the pet before adopting?</div>
                <div className="collapse-content text-sm">
                    Yes! We encourage meet-and-greets either virtually or at our partner shelters before finalizing adoption.
                </div>
            </div>

            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">Do you offer home delivery of adopted pets?</div>
                <div className="collapse-content text-sm">
                    In some cases, yes. Otherwise, you may need to pick up your pet from the shelter or foster home.
                </div>
            </div>

            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">Are the pets vaccinated and neutered?</div>
                <div className="collapse-content text-sm">
                    All pets listed are up-to-date with vaccinations, and most are spayed/neutered before adoption.
                </div>
            </div>

            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">What if I can’t keep my adopted pet?</div>
                <div className="collapse-content text-sm">
                    Please contact us—we have a rehoming program to ensure pets are placed in safe homes.
                </div>
            </div>

            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">Can I adopt if I live outside the city/region?</div>
                <div className="collapse-content text-sm">
                    Yes, but transport availability and additional fees may apply.
                </div>
            </div>

            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">Do you allow trial adoptions?</div>
                <div className="collapse-content text-sm">
                    Some pets may be available for a foster-to-adopt program to ensure a good match.
                </div>
            </div>

            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">Can I adopt more than one pet?</div>
                <div className="collapse-content text-sm">
                    Yes, but approval depends on your ability to provide proper care and space for multiple pets.
                </div>
            </div>

            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">How do I donate or support your organization?</div>
                <div className="collapse-content text-sm">
                    You can donate via our “Support Us” page or volunteer to foster or help with pet care.
                </div>
            </div>

        </div>
    );
};

export default FaQ;