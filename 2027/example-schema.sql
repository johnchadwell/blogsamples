GO
/****** Object:  Table [dbo].[Customers]    Script Date: 8/7/2024 2:01:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[CustomerId] [int] IDENTITY(1,1) NOT NULL,
	[Address] [nvarchar](max) NULL,
	[ZipCode] [nvarchar](max) NULL,
	[County] [nvarchar](max) NULL,
	[City] [nvarchar](max) NULL,
	[Lat] [float] NULL,
	[Latitude] [geography] NULL,
	[Long] [float] NULL,
	[Longitude] [geography] NULL,
	[GUID] [nvarchar](max) NULL,
	[NatGrid_Coord] [nvarchar](max) NULL,
	[State] [nvarchar](max) NULL,
	[Email] [nvarchar](max) NULL,
	[FirstName] [nvarchar](max) NULL,
	[LastName] [nvarchar](max) NULL,
	[IsAzureAccount] [bit] NOT NULL,
	[Country] [nvarchar](max) NULL,
 CONSTRAINT [PK_Customers] PRIMARY KEY CLUSTERED 
(
	[CustomerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Deliveries]    Script Date: 8/7/2024 2:01:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Deliveries](
	[DeliveryId] [int] IDENTITY(1,1) NOT NULL,
	[OrderId] [int] NOT NULL,
	[DeliveryStatusId] [int] NULL,
	[OrderDate] [datetime2](7) NOT NULL,
	[DeliveredDate] [datetime2](7) NOT NULL,
	[CreatedBy] [uniqueidentifier] NOT NULL,
	[CreatedOn] [datetime2](7) NOT NULL,
	[ModifiedBy] [uniqueidentifier] NOT NULL,
	[ModifiedOn] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Deliveries] PRIMARY KEY CLUSTERED 
(
	[DeliveryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DeliveryItems]    Script Date: 8/7/2024 2:01:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DeliveryItems](
	[DeliveryItemId] [int] IDENTITY(1,1) NOT NULL,
	[ProductId] [int] NOT NULL,
	[DeliveryItemStatusId] [int] NULL,
	[CreatedBy] [uniqueidentifier] NOT NULL,
	[CreatedOn] [datetime2](7) NOT NULL,
	[ModifiedBy] [uniqueidentifier] NOT NULL,
	[ModifiedOn] [datetime2](7) NOT NULL,
	[DeliveryId] [int] NOT NULL,
	[OrderId] [int] NOT NULL,
	[OrderLineItemId] [int] NOT NULL,
	[Quantity] [int] NOT NULL,
 CONSTRAINT [PK_DeliveryItems] PRIMARY KEY CLUSTERED 
(
	[DeliveryItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DeliveryItemStatus]    Script Date: 8/7/2024 2:01:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DeliveryItemStatus](
	[DeliveryItemStatusId] [int] IDENTITY(1,1) NOT NULL,
	[Status] [nvarchar](max) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_DeliveryItemStatus] PRIMARY KEY CLUSTERED 
(
	[DeliveryItemStatusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DeliveryStatus]    Script Date: 8/7/2024 2:01:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DeliveryStatus](
	[DeliveryStatusId] [int] IDENTITY(1,1) NOT NULL,
	[Status] [nvarchar](max) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_DeliveryStatus] PRIMARY KEY CLUSTERED 
(
	[DeliveryStatusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Inventories]    Script Date: 8/7/2024 2:01:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Inventories](
	[InventoryId] [int] IDENTITY(1,1) NOT NULL,
	[Quantity] [int] NOT NULL,
	[ReorderThreshold] [int] NOT NULL,
	[ReorderAmount] [int] NOT NULL,
	[ProductId] [int] NOT NULL,
	[ReorderTime] [int] NOT NULL,
 CONSTRAINT [PK_Inventories] PRIMARY KEY CLUSTERED 
(
	[InventoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InventoryItems]    Script Date: 8/7/2024 2:01:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InventoryItems](
	[InventoryItemId] [int] IDENTITY(1,1) NOT NULL,
	[DeliveryItemId] [int] NOT NULL,
	[ProductId] [int] NOT NULL,
	[StockDate] [datetime2](7) NOT NULL,
	[CreatedBy] [uniqueidentifier] NOT NULL,
	[CreatedOn] [datetime2](7) NOT NULL,
	[ModifiedBy] [uniqueidentifier] NOT NULL,
	[ModifiedOn] [datetime2](7) NOT NULL,
	[InventoryItemStatusId] [int] NULL,
 CONSTRAINT [PK_InventoryItems] PRIMARY KEY CLUSTERED 
(
	[InventoryItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InventoryItemStatus]    Script Date: 8/7/2024 2:01:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InventoryItemStatus](
	[InventoryItemStatusId] [int] IDENTITY(1,1) NOT NULL,
	[Status] [nvarchar](max) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_InventoryItemStatus] PRIMARY KEY CLUSTERED 
(
	[InventoryItemStatusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InventoryOrders]    Script Date: 8/7/2024 2:01:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InventoryOrders](
	[InventoryOrderId] [int] IDENTITY(1,1) NOT NULL,
	[InventoryId] [int] NOT NULL,
	[Quantity] [int] NOT NULL,
	[OrderDate] [datetime2](7) NOT NULL,
	[CompleteDate] [datetime2](7) NOT NULL,
	[InventoryOrderStatusId] [int] NULL,
	[CreatedBy] [uniqueidentifier] NOT NULL,
	[CreatedOn] [datetime2](7) NOT NULL,
	[ModifiedBy] [uniqueidentifier] NOT NULL,
	[ModifiedOn] [datetime2](7) NOT NULL,
	[ExpectedDate] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_InventoryOrders] PRIMARY KEY CLUSTERED 
(
	[InventoryOrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InventoryOrderStatus]    Script Date: 8/7/2024 2:01:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InventoryOrderStatus](
	[InventoryOrderStatusId] [int] IDENTITY(1,1) NOT NULL,
	[Status] [nvarchar](max) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_InventoryOrderStatus] PRIMARY KEY CLUSTERED 
(
	[InventoryOrderStatusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderLineItems]    Script Date: 8/7/2024 2:01:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderLineItems](
	[OrderLineItemId] [int] IDENTITY(1,1) NOT NULL,
	[OrderId] [int] NOT NULL,
	[ProductId] [int] NOT NULL,
	[Quantity] [int] NOT NULL,
	[TotalPrice] [real] NOT NULL,
	[CreatedBy] [uniqueidentifier] NOT NULL,
	[CreatedOn] [datetime2](7) NOT NULL,
	[ModifiedBy] [uniqueidentifier] NOT NULL,
	[ModifiedOn] [datetime2](7) NOT NULL,
	[OrderLineItemGuid] [uniqueidentifier] NOT NULL,
	[PriceTotal] [float] NOT NULL,
	[OrderLineItemStatusId] [int] NULL,
 CONSTRAINT [PK_OrderLineItems] PRIMARY KEY CLUSTERED 
(
	[OrderLineItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderLineItemStatus]    Script Date: 8/7/2024 2:01:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderLineItemStatus](
	[OrderLineItemStatusId] [int] IDENTITY(1,1) NOT NULL,
	[Status] [nvarchar](max) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_OrderLineItemStatus] PRIMARY KEY CLUSTERED 
(
	[OrderLineItemStatusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 8/7/2024 2:01:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[OrderId] [int] IDENTITY(1,1) NOT NULL,
	[CustomerId] [int] NOT NULL,
	[OrderDate] [datetime2](7) NOT NULL,
	[Status] [nvarchar](max) NOT NULL,
	[TotalSale] [real] NOT NULL,
	[CreatedBy] [uniqueidentifier] NOT NULL,
	[CreatedOn] [datetime2](7) NOT NULL,
	[ModifiedBy] [uniqueidentifier] NOT NULL,
	[ModifiedOn] [datetime2](7) NOT NULL,
	[OrderGuid] [uniqueidentifier] NOT NULL,
	[SaleTotal] [float] NOT NULL,
	[OrderStatusId] [int] NULL,
	[DeliveryDate] [datetime2](7) NOT NULL,
	[ShippingDate] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderStatus]    Script Date: 8/7/2024 2:01:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderStatus](
	[OrderStatusId] [int] IDENTITY(1,1) NOT NULL,
	[Status] [nvarchar](max) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_OrderStatus] PRIMARY KEY CLUSTERED 
(
	[OrderStatusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProductCategories]    Script Date: 8/7/2024 2:01:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductCategories](
	[ProductCategoryId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_ProductCategories] PRIMARY KEY CLUSTERED 
(
	[ProductCategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 8/7/2024 2:01:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[ProductId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[UnitPrice] [real] NOT NULL,
	[IsDeleted] [bit] NOT NULL,
	[ItemsAvailable] [int] NULL,
	[ProductGuid] [uniqueidentifier] NOT NULL,
	[ProductCategoryId] [int] NULL,
	[ProductSubCategoryId] [int] NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProductSubCategories]    Script Date: 8/7/2024 2:01:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductSubCategories](
	[ProductSubCategoryId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[IsDeleted] [bit] NOT NULL,
	[ProductCategoryId] [int] NULL,
 CONSTRAINT [PK_ProductSubCategories] PRIMARY KEY CLUSTERED 
(
	[ProductSubCategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Customers] ADD  DEFAULT (CONVERT([bit],(0))) FOR [IsAzureAccount]
GO
ALTER TABLE [dbo].[DeliveryItems] ADD  DEFAULT ((0)) FOR [DeliveryId]
GO
ALTER TABLE [dbo].[DeliveryItems] ADD  DEFAULT ((0)) FOR [OrderId]
GO
ALTER TABLE [dbo].[DeliveryItems] ADD  DEFAULT ((0)) FOR [OrderLineItemId]
GO
ALTER TABLE [dbo].[DeliveryItems] ADD  DEFAULT ((0)) FOR [Quantity]
GO
ALTER TABLE [dbo].[Inventories] ADD  DEFAULT ((0)) FOR [ProductId]
GO
ALTER TABLE [dbo].[Inventories] ADD  DEFAULT ((0)) FOR [ReorderTime]
GO
ALTER TABLE [dbo].[InventoryOrders] ADD  DEFAULT ('0001-01-01T00:00:00.0000000') FOR [ExpectedDate]
GO
ALTER TABLE [dbo].[OrderLineItems] ADD  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [CreatedBy]
GO
ALTER TABLE [dbo].[OrderLineItems] ADD  DEFAULT ('0001-01-01T00:00:00.0000000') FOR [CreatedOn]
GO
ALTER TABLE [dbo].[OrderLineItems] ADD  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [ModifiedBy]
GO
ALTER TABLE [dbo].[OrderLineItems] ADD  DEFAULT ('0001-01-01T00:00:00.0000000') FOR [ModifiedOn]
GO
ALTER TABLE [dbo].[OrderLineItems] ADD  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OrderLineItemGuid]
GO
ALTER TABLE [dbo].[OrderLineItems] ADD  DEFAULT ((0.0000000000000000e+000)) FOR [PriceTotal]
GO
ALTER TABLE [dbo].[Orders] ADD  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [CreatedBy]
GO
ALTER TABLE [dbo].[Orders] ADD  DEFAULT ('0001-01-01T00:00:00.0000000') FOR [CreatedOn]
GO
ALTER TABLE [dbo].[Orders] ADD  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [ModifiedBy]
GO
ALTER TABLE [dbo].[Orders] ADD  DEFAULT ('0001-01-01T00:00:00.0000000') FOR [ModifiedOn]
GO
ALTER TABLE [dbo].[Orders] ADD  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OrderGuid]
GO
ALTER TABLE [dbo].[Orders] ADD  DEFAULT ((0.0000000000000000e+000)) FOR [SaleTotal]
GO
ALTER TABLE [dbo].[Orders] ADD  DEFAULT ('0001-01-01T00:00:00.0000000') FOR [DeliveryDate]
GO
ALTER TABLE [dbo].[Orders] ADD  DEFAULT ('0001-01-01T00:00:00.0000000') FOR [ShippingDate]
GO
ALTER TABLE [dbo].[ProductCategories] ADD  DEFAULT (CONVERT([bit],(0))) FOR [IsDeleted]
GO
ALTER TABLE [dbo].[Products] ADD  DEFAULT (CONVERT([bit],(0))) FOR [IsDeleted]
GO
ALTER TABLE [dbo].[Products] ADD  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [ProductGuid]
GO
ALTER TABLE [dbo].[Deliveries]  WITH CHECK ADD  CONSTRAINT [FK_Deliveries_DeliveryStatus_DeliveryStatusId] FOREIGN KEY([DeliveryStatusId])
REFERENCES [dbo].[DeliveryStatus] ([DeliveryStatusId])
GO
ALTER TABLE [dbo].[Deliveries] CHECK CONSTRAINT [FK_Deliveries_DeliveryStatus_DeliveryStatusId]
GO
ALTER TABLE [dbo].[DeliveryItems]  WITH CHECK ADD  CONSTRAINT [FK_DeliveryItems_Deliveries_DeliveryId] FOREIGN KEY([DeliveryId])
REFERENCES [dbo].[Deliveries] ([DeliveryId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[DeliveryItems] CHECK CONSTRAINT [FK_DeliveryItems_Deliveries_DeliveryId]
GO
ALTER TABLE [dbo].[DeliveryItems]  WITH CHECK ADD  CONSTRAINT [FK_DeliveryItems_DeliveryItemStatus_DeliveryItemStatusId] FOREIGN KEY([DeliveryItemStatusId])
REFERENCES [dbo].[DeliveryItemStatus] ([DeliveryItemStatusId])
GO
ALTER TABLE [dbo].[DeliveryItems] CHECK CONSTRAINT [FK_DeliveryItems_DeliveryItemStatus_DeliveryItemStatusId]
GO
ALTER TABLE [dbo].[InventoryItems]  WITH CHECK ADD  CONSTRAINT [FK_InventoryItems_InventoryItemStatus_InventoryItemStatusId] FOREIGN KEY([InventoryItemStatusId])
REFERENCES [dbo].[InventoryItemStatus] ([InventoryItemStatusId])
GO
ALTER TABLE [dbo].[InventoryItems] CHECK CONSTRAINT [FK_InventoryItems_InventoryItemStatus_InventoryItemStatusId]
GO
ALTER TABLE [dbo].[InventoryOrders]  WITH CHECK ADD  CONSTRAINT [FK_InventoryOrders_InventoryOrderStatus_InventoryOrderStatusId] FOREIGN KEY([InventoryOrderStatusId])
REFERENCES [dbo].[InventoryOrderStatus] ([InventoryOrderStatusId])
GO
ALTER TABLE [dbo].[InventoryOrders] CHECK CONSTRAINT [FK_InventoryOrders_InventoryOrderStatus_InventoryOrderStatusId]
GO
ALTER TABLE [dbo].[OrderLineItems]  WITH CHECK ADD  CONSTRAINT [FK_OrderLineItems_OrderLineItemStatus_OrderLineItemStatusId] FOREIGN KEY([OrderLineItemStatusId])
REFERENCES [dbo].[OrderLineItemStatus] ([OrderLineItemStatusId])
GO
ALTER TABLE [dbo].[OrderLineItems] CHECK CONSTRAINT [FK_OrderLineItems_OrderLineItemStatus_OrderLineItemStatusId]
GO
ALTER TABLE [dbo].[OrderLineItems]  WITH CHECK ADD  CONSTRAINT [FK_OrderLineItems_Orders_OrderId] FOREIGN KEY([OrderId])
REFERENCES [dbo].[Orders] ([OrderId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderLineItems] CHECK CONSTRAINT [FK_OrderLineItems_Orders_OrderId]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_OrderStatus_OrderStatusId] FOREIGN KEY([OrderStatusId])
REFERENCES [dbo].[OrderStatus] ([OrderStatusId])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_OrderStatus_OrderStatusId]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_ProductSubCategories_ProductSubCategoryId] FOREIGN KEY([ProductSubCategoryId])
REFERENCES [dbo].[ProductSubCategories] ([ProductSubCategoryId])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_ProductSubCategories_ProductSubCategoryId]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products2_ProductCategories_ProductCategoryId] FOREIGN KEY([ProductCategoryId])
REFERENCES [dbo].[ProductCategories] ([ProductCategoryId])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products2_ProductCategories_ProductCategoryId]
GO
ALTER TABLE [dbo].[ProductSubCategories]  WITH CHECK ADD  CONSTRAINT [FK_ProductSubCategories_ProductCategories_ProductCategoryId] FOREIGN KEY([ProductCategoryId])
REFERENCES [dbo].[ProductCategories] ([ProductCategoryId])
GO
ALTER TABLE [dbo].[ProductSubCategories] CHECK CONSTRAINT [FK_ProductSubCategories_ProductCategories_ProductCategoryId]
GO
