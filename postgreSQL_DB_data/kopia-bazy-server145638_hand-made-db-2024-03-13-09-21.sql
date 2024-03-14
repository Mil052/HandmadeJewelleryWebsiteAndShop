--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'SQL_ASCII';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: news; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.news (
    id integer NOT NULL,
    title character varying(300) NOT NULL,
    subtitle character varying(300),
    description text NOT NULL,
    image_path character varying(300) NOT NULL,
    image_alt character varying(300) NOT NULL
);


--
-- Name: news_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.news_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: news_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.news_id_seq OWNED BY public.news.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    id integer NOT NULL,
    category character varying(100) NOT NULL,
    status character varying(100) NOT NULL,
    name character varying(300) NOT NULL,
    description text NOT NULL,
    excerpt character varying(300) NOT NULL,
    image_path_01 character varying NOT NULL,
    image_path_02 character varying,
    image_path_03 character varying,
    image_alt character varying NOT NULL,
    price numeric(4,2)
);


--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: selected_products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.selected_products (
    product_id integer NOT NULL
);


--
-- Name: sliders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sliders (
    id integer NOT NULL,
    title character varying(300) NOT NULL,
    description text NOT NULL,
    image_path character varying(300) NOT NULL,
    image_alt character varying(300) NOT NULL,
    link_path character varying(300),
    link_text character varying(300)
);


--
-- Name: sliders_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sliders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sliders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sliders_id_seq OWNED BY public.sliders.id;


--
-- Name: news id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.news ALTER COLUMN id SET DEFAULT nextval('public.news_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: sliders id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sliders ALTER COLUMN id SET DEFAULT nextval('public.sliders_id_seq'::regclass);


--
-- Data for Name: news; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.news (id, title, subtitle, description, image_path, image_alt) FROM stdin;
1	VALENTINE’S DAY	SALE -20%	Give your girlfriend an unforgettable and original handmade jewelry!  \nToday, flowers and sweets remain the most popular gifts for Valentine's Day.  \nWhat if you surprise her this year with a little thing that your girlfriend doesn't expect at all?  \nSee our special offer for Valentine's Day.	/news/beads-bracelets.png	colorful beads bracelets
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products (id, category, status, name, description, excerpt, image_path_01, image_path_02, image_path_03, image_alt, price) FROM stdin;
3	hair-pin	available	Hair pin with white flowers	Cream-white foam flowers on a golden colour metal pin with the addition of Toho beads and white topaz.	Made of metal pin with white foamiran flowers	/products/hair-pin-flowers/hair-pin-flowers-01.png	/products/hair-pin-flowers/hair-pin-flowers-02.png	/products/hair-pin-flowers/hair-pin-flowers-03.png	handmade hair pin with white flowers	35.99
4	bracelet	available	Bracelet with jadeite beads	Made of matte jadeite beads with golden colour metal clasp and pendant.  \nGolden colour metal decorative inserts between the beads add style and elegance.	Made of matte jadeite beads with golden colour metal clasp and pendant	/products/bracelet-jadeite/bracelet-jadeite-01.png	/products/bracelet-jadeite/bracelet-jadeite-02.png	/products/bracelet-jadeite/bracelet-jadeite-03.png	handmade bracelet with matte jadeite beads	39.99
1	earrings	available	Earrings with red flowers	Made of surgical steel with red foamiran flowers.  \nFoam flowers add charm and softness.  \nToho beads, Miyuki beads and crystals provide shine and chic.	Made of surgical steel with red foamiran flowers.	/products/earrings-red/earrings-red-01.png	/products/earrings-red/earrings-red-02.png	/products/earrings-red/earrings-red-03.png	handmade earrings with red flowers	45.99
2	hairband	available	Hairband with white flowers	Made of metal wattles with white foamiran flowers.  \nGolden colour wattles will emphasize your hairstyle.	Made of metal wattles with white foamiran flowers	/products/hairband-flowers/hairband-flowers-01.png	/products/hairband-flowers/hairband-flowers-02.png	/products/hairband-flowers/hairband-flowers-03.png	handmade hairband with white flowers	55.99
5	bracelet	available	Beads bracelet	Made of Toho beads in two shades of gold.  \nFinishing and clasp made of silver.  \nFinished with a silver pendant with a tree motif.	Made of Toho beads in two shades of gold	/products/bracelet-beads-gold/bracelet-beads-gold-01.png	/products/bracelet-beads-gold/bracelet-beads-gold-02.png	/products/bracelet-beads-gold/bracelet-beads-gold-03.png	handmade beads bracelet	79.99
\.


--
-- Data for Name: selected_products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.selected_products (product_id) FROM stdin;
1
3
4
5
\.


--
-- Data for Name: sliders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.sliders (id, title, description, image_path, image_alt, link_path, link_text) FROM stdin;
1	Unique, handmade jewellery.	To express your style and beauty.	/slider/wide-bracelet.png	handmade bracelet	/shop	Take a glimpse into our workshop
2	Women's jewellery.	Made with attention to every detail.	/slider/hair-clip.png	handmade hair clip	/shop	Take a glimpse into our workshop
3	Earrings made of surgical steel with foam flowers.	Classic proposition suitable for both everyday use and elegant occasions.	/slider/white-earrings.png	handmade earrings	/shop	Take a glimpse into our workshop
4	Beautiful handmade jewelry.	Earrings, bracelets, necklaces, hairbands and much more you will find in our online shop.	/slider/red-beads.png	red beads bracelet	/shop	Take a glimpse into our workshop
\.


--
-- Name: news_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.news_id_seq', 1, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.products_id_seq', 5, true);


--
-- Name: sliders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sliders_id_seq', 4, true);


--
-- Name: news news_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: selected_products selected_products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.selected_products
    ADD CONSTRAINT selected_products_pkey PRIMARY KEY (product_id);


--
-- Name: sliders sliders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sliders
    ADD CONSTRAINT sliders_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

