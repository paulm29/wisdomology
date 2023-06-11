package au.com.paulrobotham.wisdomology.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Profile
import org.springframework.security.authorization.AuthorityAuthorizationManager.hasAuthority
import org.springframework.security.authorization.AuthorityAuthorizationManager.hasRole
import org.springframework.security.config.Customizer
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configurers.AuthorizeHttpRequestsConfigurer.AuthorizationManagerRequestMatcherRegistry
import org.springframework.security.config.annotation.web.configurers.FormLoginConfigurer
import org.springframework.security.config.annotation.web.configurers.LogoutConfigurer
import org.springframework.security.config.web.server.ServerHttpSecurity.http
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.provisioning.InMemoryUserDetailsManager
import org.springframework.security.web.SecurityFilterChain

@Configuration
@EnableWebSecurity
@Profile(value = ["dev", "prod", "test"])
class WebSecurityConfig {
    @Bean
    @Throws(Exception::class)
    fun securityFilterChain(http: HttpSecurity): SecurityFilterChain {
//        http.csrf().disable()
        http.authorizeHttpRequests()
            .requestMatchers("/").permitAll()
            .requestMatchers("/config").permitAll()
            .requestMatchers("/quote").permitAll()
            .anyRequest().permitAll() // TODO
//            .formLogin { form: FormLoginConfigurer<HttpSecurity?> ->
//                form
//                    .loginPage("/login")
//                    .permitAll()
//            }
//            .logout { logout: LogoutConfigurer<HttpSecurity?> -> logout.permitAll() }
            return http.build();
    }

    @Bean
    fun userDetailsService(): UserDetailsService {
        val user = User.withDefaultPasswordEncoder()
            .username("user")
            .password("password")
            .roles("USER")
            .build()
        return InMemoryUserDetailsManager(user)
    } //    @Autowired
    //    private UserRepository userRepository;
    //    @Autowired
    //    private FollowService followService;
    //    @Autowired
    //    private PasswordEncoder passwordEncoder;
    //
    //    @Value("${security.enabled:true}")
    //    private boolean securityEnabled;
    //
    //
    //    @Autowired
    //    private AuthenticationEntryPoint authenticationEntryPoint;
    //    @Autowired
    //    private AuthenticationSuccessHandler authenticationSuccessHandler;
    //    @Autowired
    //    private LogoutSuccessHandler logoutSuccessHandler;

    //
    //    @Bean
    //    public WebSecurityCustomizer webSecurityCustomizer() {
    //        return (web) -> web.ignoring().requestMatchers("/ignore1", "/ignore2");
    //        if (securityEnabled) {
    //            web.ignoring().antMatchers("/static/**");
    //        } else {
    //            web.ignoring().antMatchers("/**");
    //        }
    //        http.authorizeRequests()
    //                .antMatchers("/rest/admin/**").hasRole("ADMIN")
    //                .antMatchers("/rest/profiles/search").permitAll() // duplicate check
    //                .antMatchers(
    //                        "/auth/**",
    //                        "/login",                   // twitter ?
    //                        "/logout",                  // twitter ?
    //                        "/signin",                  // facebook
    //                        "/signup",                  // twitter ?
    //                        "/register",                // twitter ?
    //                        "/registration",            // twitter ?
    //                        "/rest/registration",       // registrationGetAll - TODO have separate email check endpoint instead?
    //                        "/rest/application-config",  // application config
    //                        "/rest/memes/**",  // only for e2e tests
    //                        "/rest/profiles/**",  // only for e2e tests
    //                        "/rest/queue"  // only for e2e tests
    //                ).permitAll()
    //                .antMatchers("/rest/**").authenticated()
    //                .antMatchers("/**").permitAll() // should be redundant given above, but haven't bothered testing
    //                .and()
    //                .apply(new SpringSocialConfigurer());
    //
    //        http.exceptionHandling().authenticationEntryPoint(authenticationEntryPoint);
    //        http.formLogin()
    //                .successHandler(authenticationSuccessHandler)
    //                .failureHandler(new SimpleUrlAuthenticationFailureHandler());
    //        http.logout().logoutSuccessHandler(logoutSuccessHandler);
    //
    //        http.csrf().disable();
    //        http.headers().cacheControl();
    //        http.headers().frameOptions().disable(); // needed to use H2 web console
    //    }
    /**
     * //     * Configures the authentication manager bean which processes authentication
     * //     * requests.
     * //      */
    //    @Override
    //    protected void configure(final AuthenticationManagerBuilder auth) throws Exception {
    //        auth.userDetailsService(userDetailsService()).passwordEncoder(passwordEncoder);
    //    }
}
