import { useEffect } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { STORE_KEY } from '../store';
import Divider from '../components/divider';
import Heading from '../components/heading';
import NavigationButtons from '../components/navigation-buttons';
import LanguageSelection from '../components/language-selection';
import BusinessTypes from '../components/business-types';
import { useForm } from 'react-hook-form';
import Input from '../components/input';
import { useNavigateSteps } from '../router';
import Container from '../components/container';
import AISitesNotice from '../components/ai-sites-notice';
import { toastBody } from '../helpers';
import toast from 'react-hot-toast';

const BusinessDetails = () => {
	const { nextStep } = useNavigateSteps();

	const { setSiteLanguageListAIStep, setWebsiteNameAIStep } =
		useDispatch( STORE_KEY );
	const { businessType, siteLanguageList, businessName } = useSelect(
		( select ) => {
			const { getAIStepData } = select( STORE_KEY );
			return getAIStepData();
		}
	);

	const handleClickContinue = () => {
		if ( ! businessType || '' === businessType ) {
			return;
		}

		setWebsiteNameAIStep( watchedBusinessName );
		nextStep();
	};

	const getLanguages = async () => {
		try {
			const response = await apiFetch( {
				path: 'zipwp/v1/site-languages',
				method: 'GET',
				headers: {
					'X-WP-Nonce': aiBuilderVars.rest_api_nonce,
				},
			} );
			if ( response.success ) {
				setSiteLanguageListAIStep( response?.data?.data );
			} else {
				throw new Error( response?.data?.data );
			}
		} catch ( error ) {
			toast.error( toastBody( error ) );
		}
	};

	useEffect( () => {
		if ( siteLanguageList?.length ) {
			return;
		}
		getLanguages();
	}, [ siteLanguageList ] );

	/* Business Name */
	const {
		register,
		formState: { errors },
		reset,
		setFocus,
		watch,
	} = useForm( { defaultValues: { businessName } } );
	const watchedBusinessName = watch( 'businessName' );

	useEffect( () => {
		setFocus( 'businessName' );
	}, [ setFocus ] );

	useEffect( () => {
		if ( ! businessName ) {
			reset( { businessName: '' } );
		}
	}, [ businessName ] );

	return (
		<Container>
			<AISitesNotice />
			<Heading
				heading={ __( "Let's build your website!", 'ai-builder' ) }
				subHeading={ __(
					'Please share some basic details of the website to get started.',
					'ai-builder'
				) }
				className="leading-[26px]"
			/>
			<div className="w-full max-w-container flex flex-col mt-[2.2rem]">
				<div className="!space-y-2">
					<h5 className="text-sm flex font-medium leading-6 items-center !mb-2 zw-sm-medium">
						{ __( 'Name of the website:', 'ai-builder' ) }
						<span className="text-alert-error">&nbsp;*</span>
					</h5>
					<Input
						className="w-full shadow-sm"
						name="businessName"
						placeholder={ __(
							'Enter name or title of the website',
							'ai-builder'
						) }
						inputClassname="p-0"
						register={ register }
						maxLength={ 100 }
						validations={ {
							required: __( 'Name is required', 'ai-builder' ),
							maxLength: 100,
						} }
						error={ errors.businessName }
						height="[40px]"
					/>
				</div>
				<div className="w-full items-center justify-center sm:flex sm:flex-wrap max-mobile:space-y-5 gap-8 mt-8 lg:grid grid-cols-[55%_45%] px-4 max-tablet:px-0 items-start">
					<div className="flex-1 min-h-[48px]  md:min-w-0">
						{ /*!space-y-1.5 class of the above ^*/ }
						<label
							className={ `zw-sm-medium text-app-heading` }
							htmlFor={ `input-business-type` }
						>
							{ __( 'This website is for', 'ai-builder' ) }:
							<span className="text-alert-error"> *</span>
						</label>

						<BusinessTypes />
					</div>
					<LanguageSelection />
				</div>
			</div>
			{ /* Types */ }
			<Divider />
			{ /* Footer */ }
			<NavigationButtons
				onClickContinue={ handleClickContinue }
				disableContinue={ ! businessType || ! watchedBusinessName }
			/>
		</Container>
	);
};

export default BusinessDetails;
